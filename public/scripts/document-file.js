import { WorkFile } from "workFile";

class DocumentFile extends WorkFile {
    constructor(name, author, category, content, fontFamily, fontSize) {
        super(name, author);
        this.category = category;
        this.content = content;
        this.isPublic = false;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
    }

    get category() {
        return this._category;
    }
    set category(ca) {
        this._category = ca;
    }

    get content() {
        return this._content;
    }
    set content(c) {
        this._content = c;
    }
}

export { DocumentFile };