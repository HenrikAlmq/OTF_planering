import { BaseElement } from "../ui/base-element.mjs";

export class Page extends BaseElement {
    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
    }
}