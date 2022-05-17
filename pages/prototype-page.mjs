import { BaseElement } from "../ui/base-element.mjs";

export class ProtoType extends BaseElement {
    constructor(){
        super();
    }

    getElementString() {
        return `
        <div style="margin: 20px;"><h3><a target="_blank" href="app.html">Prototyp</a></h3></div>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--3-col">
                <h5><strong>Backend</strong></h5>
                <ul>
                <li>Skapa order</li>
                <li>Skapa artiklar</li>
                <li>Skapa inleverans</li>
                <li>Skapa lagerplatser</li>
                <li>JWT</li>
                </ul>
            </div>
            <div class="mdl-cell mdl-cell--3-col">
                <h5><strong>Frontend</strong></h5>
                <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                </ul>
            </div>
            <div class="mdl-cell mdl-cell--3-col">
            <h5><strong>Integration</strong></h5d>
                <ul>
                <li>Integration till affärssystem</li>
                </ul>
            </div>
            <div class="mdl-cell mdl-cell--3-col">
                <h5><strong>Databas</strong></h5>
                <ul>
                <li>SQLite</li>
                <li>Eventuellt testa Dapper</li>
                </ul>
            </div>
        </div>
        
        `
    }
}