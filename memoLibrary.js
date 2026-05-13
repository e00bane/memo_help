class MemoLibrary {
    constructor() {
        this.memos = [];
    }

    addMemo(memo) {
        this.memos.push(memo);
    }

    getMemos() {
        return this.memos;
    }
}