
export class ChatView {
    constructor(controller) {
        this.controller = controller;
        this.dom = {
            chatMessages: document.getElementById('chat-messages'),
            userInput: document.getElementById('user-input'),
            btnSend: document.getElementById('btn-send'),
            btnMenu: document.getElementById('menu-button'),
            menuOptions: document.getElementById('menu-options'),
            modal: document.getElementById('modal-profile'),
            newNameInput: document.getElementById('new-name'),
            formProfile: document.getElementById('form-profile'),
            btnDeleteProfile: document.getElementById('btn-delete-profile'),
            btnCloseModal: document.querySelector('.close-modal-btn'),
            typingIndicator: document.getElementById('typing-indicator')
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.dom.btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            this.controller.toggleMenu();
        });

        this.dom.menuOptions.addEventListener('click', (e) => {
            if (!e.target.closest('.menu-item')) return;
            const action = e.target.closest('.menu-item').dataset.action;
            this.controller.handleMenuAction(action);
            
        });

        document.addEventListener('click', (e) => {
            if (!this.dom.menuOptions.contains(e.target)) {
                this.controller.closeMenu();
            }
        });

        this.dom.btnSend.addEventListener('click', () => this.controller.processInput());
        this.dom.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.controller.processInput();
        });

        this.dom.formProfile.addEventListener('submit', (e) => {
            e.preventDefault();
            this.controller.handleProfileUpdate(this.dom.newNameInput.value.trim());
        });

        this.dom.btnDeleteProfile.addEventListener('click', () => {
            this.controller.handleProfileDeletion();
        });

        this.dom.btnCloseModal.addEventListener('click', () => {
            this.closeModal();
        });

        this.dom.newNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.dom.formProfile.dispatchEvent(new Event('submit'));
            }
        });
    }

    showTypingIndicator() {
        if (!this.controller.isBotTyping) {
            this.dom.typingIndicator.classList.add('visible');
            const typingText = this.dom.typingIndicator.querySelector('span');
            this.controller.startTypingAnimation(typingText);
        }
    }

    hideTypingIndicator() {
        this.dom.typingIndicator.classList.remove('visible');
        this.controller.stopTypingAnimation();
    }

    addMessage(text, className) {
        const div = document.createElement('div');
        div.className = `${className} message-entering`;
        div.innerHTML = text;
        this.dom.chatMessages.appendChild(div);

        setTimeout(() => {
            div.classList.remove('message-entering');
        }, 100);

        this.dom.chatMessages.scrollTop = this.dom.chatMessages.scrollHeight;
    }

    openModal(currentName) {
        this.dom.modal.showModal();
        this.dom.newNameInput.value = currentName;
        this.dom.newNameInput.focus();
    }

    closeModal() {
        this.dom.modal.close();
        this.dom.userInput.focus();
    }

    toggleMenu(visible) {
        this.dom.menuOptions.classList.toggle('menu-visible', visible);
        this.dom.btnMenu.classList.toggle('active', visible);
    }

    clearChat() {
        this.dom.chatMessages.innerHTML = '';
    }

    focusInput() {
        this.dom.userInput.focus();
    }

    clearInput() {
        this.dom.userInput.value = '';
    }
}