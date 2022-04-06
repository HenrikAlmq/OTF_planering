import { Page } from "../framework/page.mjs";
import { application } from "../app.js";
import { Content } from "../ui/content-main.mjs";

export class ContactPage extends Page {
    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
        let c = new Content();
        c.appendToElement(this.element);
        
    }

    getElementString() {
        return '<div style="margin: 20px;"><h3>Kontakt</h3></div>'
    }
}

