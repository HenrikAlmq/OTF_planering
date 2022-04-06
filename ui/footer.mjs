import { BaseElement } from "./base-element.mjs";

export class Footer extends BaseElement{
    constructor(title){
        super();
        this.title = title;
    }

    getElementString() {
        return `
        <footer class="mdl-mini-footer">
            <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">
                    <p id="foot">${this.title} & all rights reserved &copy Henrik Almqvist Moderna Webbapplikationer inlämning 1 </p>
                </div>
            </div>
        </footer>`
    }
}