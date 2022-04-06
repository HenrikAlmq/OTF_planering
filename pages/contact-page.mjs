import { Page } from "../framework/page.mjs";
import { application } from "../app.js";

export class ContactPage extends Page {
    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
        
        let data = 'Namn:Henrik Email:almqvist.henric@gmail.com Telefonnummer:0705790567'.split(' ');
    }

    getElementString() {
        return '<div style="margin: 20px;"><h3>Kontakt</h3></div>'
    }
}

