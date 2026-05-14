import { MemoLibrary } from './memoLibrary.js';


export class MemoBuilder {
    #callKey;
    #contactKey;
    #eventKey;
    #contextKey;

    constructor() {
        this.#callKey = null;
        this.#contactKey = null;
        this.#eventKey = null;
        this.#contextKey = null;
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
    set contextKey(key) {
        let contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[this.#contactKey] || [];
        this.#contextKey = contextList.includes(key) ? key : null;

        if (this.#contextKey == null) {
            console.warn(`Invalid context key ${key} for contact ${this.#contactKey}. Context key reset.`);
        }
    }


    get memo() {
        const contactText = this.#contactKey !== null ? MemoLibrary.CONTACT_TEXTS[this.#contactKey] : '';
        const eventText = this.#eventKey !== null ? MemoLibrary.EVENT_TEXTS[this.#eventKey] : '';
        const contextText = this.#contextKey !== null ? MemoLibrary.CONTEXT_TEXTS[this.#contextKey] : '';
        const callText = this.#callKey !== null ? MemoLibrary.CALL_TEXTS[this.#callKey] : '';

        return `${callText} ${contactText} ${eventText} ${contextText}`.trim();
    }

}