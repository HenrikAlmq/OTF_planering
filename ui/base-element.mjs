//Klass för bas elementen. När man skapar element ärver man från denna klass. Skriver över metod getElementString för att skriva ut HTML. appendToElement för att appenda till t.ex. body.
import $ from 'jquery'
export class BaseElement {
    constructor() {
        this.element = null;
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'please override getElementString() in BaseElement'
    }
}