import { MemoLibrary } from './memoLibrary.js';


export class MemoBuilder {
    #callKey;
    #contactKey;
    #eventKey;
    #contextKeys;

    constructor() {
        this.reset();
    }

    reset() {
        this.#callKey = null;
        this.#contactKey = null;
        this.#eventKey = null;
        this.#contextKeys = [];
    }

     // setters
    set callKey(key) {
        this.#callKey = key;
    }
    set contactKey(key) {
        this.#contactKey = key;
    }
    set eventKey(key) {
        let eventList = MemoLibrary.CONTACT_EVENT_LISTS[this.#contactKey] || [];
        this.#eventKey = eventList.includes(key) ? key : null;

        if (this.#eventKey == null) {
            console.warn(`Invalid event key ${key} for contact ${this.#contactKey}. Event key reset.`);
        }
    }
    set contextKeys(param) {
        if(this.#contactKey === null || param === null) {
            this.#contextKeys = [];
            return;
        }

        if (Array.isArray(param)) {this.handleContextListParameter(param);}
        else if (typeof param === 'number') {this.handleContextKeyParameter(param);}
        else {
            console.warn(`Invalid context key parameter ${param}. Context key reset.`);
            this.#contextKeys = [];
        }
    }

    // handling specific context key and list parameters to ensure they align with the selected contact's allowed contexts
    handleContextKeyParameter(key) {
        let contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[this.#contactKey] || [];
        this.#contextKeys = contextList.includes(key) ? [key] : [];

        if (this.#contextKeys.length === 0) {
            console.warn(`Invalid context key ${key} for contact ${this.#contactKey}. Context key reset.`);
        }
    }
    handleContextListParameter(key_list) {
        let contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[this.#contactKey] || [];
        this.#contextKeys = key_list.filter(key => contextList.includes(parseInt(key)));

        if (this.#contextKeys.length != key_list.length) {
            console.warn(`Some context keys in ${key_list} are invalid for contact ${this.#contactKey}. Valid keys retained, invalid keys removed.`);
        }
        if (this.#contextKeys.length === 0) {
            console.warn(`No valid context keys in ${key_list} for contact ${this.#contactKey}. Context key reset.`);
        }
    }

    get memo() {
        const contactText = this.#contactKey !== null ? MemoLibrary.CONTACT_TEXTS[this.#contactKey] : '';
        const eventText = this.#eventKey !== null ? MemoLibrary.EVENT_TEXTS[this.#eventKey] : '';
        const contextText = this.#contextKeys.length > 0 ? this.#contextKeys.map(key => MemoLibrary.CONTEXT_TEXTS[key]).join(' ') : '';
        const callText = this.#callKey !== null ? MemoLibrary.CALL_TEXTS[this.#callKey] : '';

        return `${callText} ${contactText} ${eventText} ${contextText}`.trim();
    }

}