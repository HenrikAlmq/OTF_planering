import { BaseElement } from "../ui/base-element.mjs";

export class ProtoType extends BaseElement {
    constructor(){
        super();
    }

    getElementString() {
        return `
        <div>TeST</div>
        `
    }
}