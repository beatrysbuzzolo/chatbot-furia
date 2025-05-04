import { StringConstants as SC } from "../utils/StringConstants.js";
import { StringPatterns as SP } from "../utils/StringPatterns.js";
import { UserModel } from "../model/UserModel.js";


export class ChatController {
    constructor() {
        this.view = null;
        this.typingInterval = null;
        this.isBotTyping = false;
        this.isProcessing = false;
        this.user = new UserModel();
        this.knowledgeBase = {
            "meetings": {
                patterns: SP.MEETINGS_PATTERN,
                responses: SP.MEETINGS_RESPONSES,
            },
            "furia": {
                patterns: SP.FURIA_PATTERN,
                responses: SP.FURIA_RESPONSES,
            },

            "players": {
                patterns: SP.PLAYERS_PATTERN,
                responses: SP.PLAYERS_RESPONSES,
            },

            "social": {
                patterns: SP.SOCIAL_PATTERN,
                responses: SP.SOCIAL_RESPONSES,
            },

            "generalmatches": {
                patterns: SP.GENERAL_MATCHES_PATTERN,
                responses: SP.GENERAL_MATCHES_RESPONSES,
            },
            
            "tournaments": {
                patterns: SP.TOURNAMENTS_PATTERN,
                responses: SP.TOURNAMENTS_RESPONSES,
            },

            "nextmatch": {
                patterns: SP.NEXT_MATCH_PATTERN,
                responses: SP.NEXT_MATCH_RESPONSES,
            },
            
            "livestatus": {
                patterns: SP.LIVE_STATUS_PATTERN,
                responses: SP.LIVE_STATUS_RESPONSES,
            },
            
            "crowd": {
                patterns: SP.CROWD_PATTERN,
                responses: SP.CROWD_RESPONSES,
            },
            
            "commands": {
                patterns: SP.COMMANDS_PATTERN,
                responses: SP.COMMANDS_RESPONSES,
            },
            "about": {
                patterns: SP.ABOUT_PATTERN,
                responses: SP.ABOUT_RESPONSES,
            },
            "more": {
                patterns: SP.MORE_PATTERN,
                responses: SP.MORE_RESPONSES,
            },
            "default": {
                responses: SP.DEFAULT_RESPONSES,
            }
        };
    }

    setView(view) {
        this.view = view; 
        this.init();
    }

    init() {
        try {
            if (!this.view.dom.typingIndicator) throw new Error(SC.TYPING_ERROR);
            this.showWelcomeMessage();
        } catch (error) {
            console.error(SC.CONSOLE_SHOW_ERROR, error);
            this.addSystemMessage(SC.CHAT_SHOW_ERROR);
        }
    }

    handleMenuAction(action) {
        switch (action) {
            case 'commands': 
                this.addSystemMessage(SP.COMMANDS_RESPONSES); 
                break;
            case 'change-name': 
                this.openProfileModal(); 
                break;
            case 'about': 
                this.addSystemMessage(SP.ABOUT_RESPONSES); 
                break;
            case 'new-chat': 
                this.resetChat(); 
                break;
        }
    }

    processInput() {
        if (this.isProcessing) return;

        const input = this.view.dom.userInput.value.trim();
        if (!input) return;

        this.isProcessing = true;
        this.addUserMessage(input);
        this.view.clearInput();

        this.view.showTypingIndicator();

        setTimeout(() => {
            this.handleCommand(input);
            this.view.hideTypingIndicator();
            this.isProcessing = false;
        }, 800 + Math.random() * 400);
    }

    handleCommand(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.startsWith('/name ')) {
            const newName = input.slice(6).trim();
            if (newName) {
                const success = this.user.updateName(newName);
                this.addSystemMessage(success ?
                   `${SC.SUCESS_NEW_NAME} ${newName}`:
                   SC.ERROR_NEW_NAME
                );
            }
            return;
        }

        const bestMatch = this.findBestMatch(lowerInput);

        if (bestMatch.action) {
            bestMatch.action();
        } else {
            const randomResponse = this.getRandomResponse(bestMatch);
            const personalizedResponse = randomResponse.replace(/\{name\}/g, this.user.name);
            this.addSystemMessage(personalizedResponse);
        }
    }

    handleProfileUpdate(newName) {
        if (!newName) {
            this.addSystemMessage(SC.VALID_NAME);
            return;
        }

        if (this.user.updateName(newName)) {
            this.addSystemMessage(`${SC.SUCESS_NEW_NAME} ${newName}`);
            this.view.closeModal();
            this.view.focusInput();
        }
    }

    handleProfileDeletion() {
        if (confirm(SC.CONFIRM_DELETE_PROFILE)) {
            localStorage.removeItem(SC.LOCAL_STORAGE_USER_KEY);
            this.user = new UserModel();
            this.view.closeModal();
            this.view.clearChat();
            setTimeout(() => this.showWelcomeMessage(), 1000);
        }
    }

    findBestMatch(input) {
        for (const [category, data] of Object.entries(this.knowledgeBase)) {
            if (category === "default") continue;

            if (data.patterns.some(pattern => input.includes(pattern))) {
                return data;
            }
        }
        return this.knowledgeBase.default;
    }

    getRandomResponse(categoryData) {
        const responses = categoryData.responses;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    startTypingAnimation(typingText) {
        let dots = 0;
        this.typingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            typingText.textContent = SC.TYPING;
        }, 300);
    }

    stopTypingAnimation() {
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
            this.typingInterval = null;
        }
        this.isBotTyping = false;
    }

    addUserMessage(text) {
        this.view.addMessage(text, 'user-message');
    }

    addSystemMessage(text) {
        this.view.addMessage(text, 'bot-message');
    }

    showWelcomeMessage() {
        const isFirstVisit = !localStorage.getItem(SC.LOCAL_STORAGE_USER_KEY);

        const messages = {
            firstTime: SC.FIRST_MESSAGE,
            returningUser: `${SC.RETURING_MESSAGE_I} ${this.user.name}! ${SC.RETURING_MESSAGE_II}`,
        };

        this.addSystemMessage(isFirstVisit ? messages.firstTime : messages.returningUser);

        if (isFirstVisit) {
            setTimeout(() => {
                this.addSystemMessage(SC.SECOND_MESSAGE);
            }, 1000);
        }
    }

    resetChat() {
        if (confirm(SC.CONFIRM_RESET_CHAT)) {
            this.view.clearChat();
            this.addSystemMessage(SC.SUCESS_RESET_CHAT);
            setTimeout(() => this.showWelcomeMessage(), 500);
        }
    }

    toggleMenu() {
        const isVisible = !this.view.dom.menuOptions.classList.contains('menu-visible');
        this.view.toggleMenu(isVisible);
    }

    closeMenu() {
        this.view.toggleMenu(false);
    }

    openProfileModal() {
        this.view.openModal(this.user.name);
    }
}