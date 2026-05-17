export class MemoLibrary {
    // constants and mappings
        static get CALL_TEXTS() {
        return {0: 'H1', 1: 'H2', 2: 'O1', 3: 'O2', 4: 'W1', 5: 'W2'};
    }
    static get CONTACT_TEXTS() {
        return {0: 'CM', 1: 'NC', 2: 'SPS', 3: 'TP', 4: 'VM'};
    }
    static get EVENT_TEXTS() {
        return {0: 'DISC', 1: 'XFR', 2: 'NA', 3: 'SIT', 4: 'INCOMPLETE', 5: 'LM', 6: 'NML', 7: 'VMF', 8: 'VMNSU'};
    }
    static get CONTEXT_TEXTS() {
        return {0: 'CC', 1: 'RELATIVE', 2: 'WRONG#', 3: 'FL'};
    }


    static get CONTACT_EVENT_LISTS() {
        return {
            0 : [0, 1],  // CM
            1 : [2, 3, 4],  // NC
            2 : [0, 1, 5, 6],  // SPS
            3 : [1, 5, 6],  // TP
            4 : [5, 6, 7, 8]  // VM
        };
    }

    static get CONTACT_CONTEXT_LISTS() {
        return {
            0 : [0],  // CM
            3 : [1, 2, 3]  // TP
        };
    }

    static callKeyExists(key) {
        return key in MemoLibrary.CALL_TEXTS;
    }
    static contactKeyExists(key) {
        return key in MemoLibrary.CONTACT_TEXTS;
    }
    static eventKeyExists(key) {
        return key in MemoLibrary.EVENT_TEXTS;
    }
    static contextKeyExists(key) {
        return key in MemoLibrary.CONTEXT_TEXTS;
    }
}