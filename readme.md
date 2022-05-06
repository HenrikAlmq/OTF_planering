Frontend:
1. Clone the repository
2. npm ci (clean install)
3. npm start (start server)

Backend:
1. Change path in AppDbContext to the path where you clone the repository to, mine is: Q:\Webbutvecklare.NET\Inlämning\OTF_planering\OTF_backend\OTF.db
2. Build the project
3. Start

För att logga in:
Henrik
admin123

Externa biblotek:
React-icons - Används för de ikoner som expanderar och minimerar en order i orders samt för att ta bort en artikel.
Axios - Används till att göra anrop mot min backend, samtliga get anrop finns i Adapter-mappen. Sedan har jag vissa post i några komponenter.
Routes - Använder detta för att kunna navigera på sidan. Fungerar som så att varje Routes skapar ett "History" objekt så React kan hålla koll på vad som ska renderas för varje url.

Tjänster:
I mappen Adapters finns samtliga GET-anrop, varför är för att kunna lista orders och artiklar samt specifika anrop mot en enskild order och orderrader. Sedan har jag 2 st post i Articles.jsx och Deliveries.jsx, anledningen till att dessa ligger där -
är för att använda mig av State som body i anropet. Går kanske att flytta ut detta och använda som parameter men har ej utforskat det än.

För att återställa projektet innan Axios och react-icons installerades:
2 maj finns det en commit som heter "Added package Axios to project", klicka på <> för att se koden innan paketet installerades
28 april finns det en commit som heter "Added React-icons packages 4.3.1", klicka på <> för att se koden innan paketet installerades

Kriterie 9:
I Deliveries och Articles görs get-anrop som sedan skickas med som props till DeliveryList och ArticleList för att rendera ut Delivery och Article kompontenterna med respektive data.

Kriterie 10:
Komponent AddDelivery och AddArticle så sparar jag information via form till dess state som sedan skickas in i funktionen onAdd för Deliveries och Articles som sedan gör en post till mitt backend.

Kriterie 12:
i komponent DeliveryDetails så använder jag mig av hook useParams för att spara deliveryId i URL:en för att sedan anropa specifik order till backend.

Kriterie 13:
Komponent AddDelivery och AddArticle

Kriterie 14:
Finns i flera komponenter men i Delivery så har jag en state som är true/false, som sedan justeras beroende på komponenten är expanderad eller inte.
Articles
Delivery
LogInForm
index.jsx
