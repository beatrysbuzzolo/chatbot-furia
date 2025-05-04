import { ChatView } from '../src/view/ChatView.js';
import { ChatController } from '../src/controller/ChatController.js';


document.addEventListener("DOMContentLoaded", () => {
    const controller = new ChatController();
    const view = new ChatView(controller);
    controller.setView(view);
});