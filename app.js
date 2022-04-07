import './node_modules/jquery/dist/jquery.js'
import { ApplicationBase } from './framework/application-base.mjs'
import { ContactPage } from './pages/contact-page.mjs';
import { BusinessPlan } from './pages/businessplan-page.mjs';
import { ProtoType } from './pages/prototype-page.mjs';

export class App extends ApplicationBase {
    constructor() {
        super('OTF');

        this.addRoute('Affärsidé', new BusinessPlan(''), true);
        this.addRoute('Kontakt', new ContactPage(''));
        this.addRoute('Prototyp', new ProtoType(''));
        
    }
}


export let application = new App();
application.show($('body'));
