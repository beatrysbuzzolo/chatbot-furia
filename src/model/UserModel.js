import { StringConstants as SC } from "../utils/StringConstants.js";

export class UserModel {
    constructor() {
        this.name = localStorage.getItem(SC.LOCAL_STORAGE_USER_KEY) || SC.DEFAULT_NAME;
    }

    updateName(newName) {
        const sanitized = newName.trim().replace(/\s+/g, ' ').slice(0, 20);
        if (!sanitized) return false;
        this.name = sanitized;
        localStorage.setItem(SC.LOCAL_STORAGE_USER_KEY, sanitized);
        return true;
    }
}