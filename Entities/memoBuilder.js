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
        if (key !== null && !MemoLibrary.CALL_TEXTS.hasOwnProperty(key)) {
            console.warn(`Invalid call key ${key}. Call key reset.`);
            this.#callKey = null;
        } else {
            this.#callKey = key;
        }
    }
    set contactKey(key) {
        if (key !== null && !MemoLibrary.CONTACT_TEXTS.hasOwnProperty(key)) {
            console.warn(`Invalid contact key ${key}. Contact key reset.`);
            this.#contactKey = null;
        } else {
            this.#contactKey = key;
        }
    }
    set eventKey(key) {
        let eventList = MemoLibrary.CONTACT_EVENT_LISTS[this.#contactKey] || [];
        this.#eventKey = eventList.includes(key) ? key : null;

        if (this.#eventKey === null && key != null) {
            console.warn(`Invalid event key ${key} for contact ${this.#contactKey}. Event key reset.`);
        }
    }
    set contextKeys(param) {
        if((this.#contactKey === null || param === null)) {
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
        const contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[this.#contactKey] || [];
        let newKeys = contextList.includes(key) ? [key] : [];

        if (newKeys.length === 0 && newKeys != []) {
            console.warn(`Invalid context key ${key} for contact ${this.#contactKey}. Context key reset.`);
            newKeys = [];
        }

        this.#contextKeys = newKeys;
    }
    handleContextListParameter(key_list) {
        let contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[this.#contactKey] || [];
        this.#contextKeys = key_list.filter(key => contextList.includes(parseInt(key)));

        if (this.#contextKeys.length != key_list.length) {
            console.warn(`Some context keys in ${key_list} are invalid for contact ${this.#contactKey}. Valid keys retained, invalid keys removed.`);
        }
    }

    get callKey() {
        return this.#callKey;
    }
    get contactKey() {
        return this.#contactKey;
    }
    get eventKey() {
        return this.#eventKey;
    }
    get contextKeys() {
        return this.#contextKeys;
    }
    get memo() {
        const contactText = this.#contactKey !== null ? MemoLibrary.CONTACT_TEXTS[this.#contactKey] : '';
        const eventText = this.#eventKey !== null ? MemoLibrary.EVENT_TEXTS[this.#eventKey] : '';
        const contextText = this.#contextKeys.length > 0 ? this.#contextKeys.map(key => MemoLibrary.CONTEXT_TEXTS[key]).join(' ') : '';
        const callText = this.#callKey !== null ? MemoLibrary.CALL_TEXTS[this.#callKey] : '';

        return `${callText} ${contactText} ${eventText} ${contextText}`.trim();
    }

    getMemoObject() {
        return {
            callKey: this.#callKey,
            contactKey: this.#contactKey,
            eventKey: this.#eventKey,
            contextKeys: this.#contextKeys
        };
    }
}