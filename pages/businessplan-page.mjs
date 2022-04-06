import { BaseElement } from "../ui/base-element.mjs";

export class BusinessPlan extends BaseElement {
    constructor(){
        super('Affärsplan');
    }

    getElementString(){
        return `
        <div style="margin: 20px;">
            <h3>Affärsidé</h3>
        </div>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col">
                <h5><strong>Bakgrund</strong></h5>
                <p>Började spåna på idén när jag hjälpte min far med hans E-handel. Fick då skriva ut flertalet plocklistor, plocka det med hjälp av papper, skriva ut fakturor, ändra orderstatus manuellt på e-handelsplattformen och gå in på postnords hemsida för att skapa adressetiketter. </p>
                <p>Något som är tidskrävande och oftast glöms bort är sin egna logistik när man startar en e-handel. Ofta lägger man tid på sin hemsida och produktkatalog men att teckna konkurrenskraftiga fraktavtal samt sitt egna lager är inte lika kul och blir där med ofta lidande. </p>
            </div>
            <div class="mdl-cell mdl-cell--4-col">
                <h5><strong>Vad är ett WMS?</strong></h5>
                <p>Ett WMS är ett lagerhanteringssystem och står för warehousemanagementsystem, ofta väldigt komplexa med mycket funktionalitet och dyra licenskostnader.</p>
                <p>Vår vission med On The Fly är att få ett användarvänligt WMS som passar mindre eller mellanstora E-handlare med en låg licenkostnad</p>
            </div>
            <div class="mdl-cell mdl-cell--4-col">
                <h5><strong>Nyttor med ett WMS</strong></h5>
                <p>Med ett WMS så ökar kvalitén då man kan hela tiden i realtid kan se lagerstatus, lagertransaktioner per plats eller produkt och ökad kvalité på utleverans med hjälp av mobilapplikationen där lagersaldon justeras vid plocket.</p>
                <p>I samband med detta så medför det även en effektivisering på ca 30%. Dels för att kvalitén ökar samt effektiviteten med att plocka via en mobilapplikation, i stället för ett eller flera papper</p>
            </div>
        </div>
        `
    }
}