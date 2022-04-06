import { BaseElement } from "./base-element.mjs";

export class Content extends BaseElement {
    constructor() {
        super();
    }
         
    getElementString() {
        return `
        <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        
        <div class="mdl-tabs__panel is-active" id="email">
          <ul>
            <li>Email: <a href="mailto:someone@example.com">almqvist.henric@gmail.com</a></li>
          </ul>
        </div>
        <div class="mdl-tabs__panel" id="telnum">
          <ul>
            <li>Telefonnummer: +46(0)70 57 90 67</li>
          </ul>
        </div>
        <div class="mdl-tabs__panel" id="name">
          <ul>
            <li>Namn: Henrik Almqvist</li>
          </ul>
        </div>
      </div>
        `
    }
}