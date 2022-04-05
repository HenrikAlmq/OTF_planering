import './node_modules/jquery/dist/jquery.js'
import { ApplicationBase } from './framework/application-base.mjs'


export class App extends ApplicationBase {
    constructor() {
        super('OTF');

        this.addRoute('Affärsidé', null);
        this.addRoute('Kontakt', null);
        this.addRoute('Prototyp', null);
    }
}


export let application = new App();
application.show($('body'));
