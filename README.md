# Radioguide - Mediahuis/Triple
## Sprint 5: Fix the Flow Interactive Website 

## Inhoudsopgave
* [Introductie](#introductie)
* [Beschrijving](#beschrijving)
* [Belangrijke features](#belangrijke-features)
* [Kenmerken](#kenmerken)
* [Bronnen](#bronnen)
* [Licentie](#licentie)

## Introductie
Bekijk hier de live website: https://julia-stevens.github.io/fix-the-flow-interactive-website/

### Over Triple & Mediahuis
Mediahuis, met wortels in België, is uitgegroeid tot een invloedrijke speler in de Europese mediamarkt. Het bedrijf, actief in de Benelux, Duitsland en Ierland, heeft een divers portfolio van nieuwsmerken, online platforms en radiostations. Sinds 2023 heeft Mediahuis haar bereik verder uitgebreid door de overname van verschillende populaire radiostations, waaronder Radio Veronica, SLAM!, Sublime, Sunlite en 100% NL.

Triple is verantwoordelijk voor het ontwikkelen en onderhouden van de web apps en mobiele apps voor al deze radiozenders. Dit omvat zowel de front-end ontwikkeling, die zorgt voor de gebruikersinterface en -ervaring, als de back-end ontwikkeling, die de technische infrastructuur en functionaliteiten van de apps ondersteunt. Door deze uitgebreide samenwerking draagt Triple bij aan het succes van de digitale kanalen van Mediahuis en zorgt het ervoor dat luisteraars een optimale ervaring hebben.

### Opdracht 
Creëer een radioguide (een webapp) die informatie geeft over programma's, DJ's, en een persoonlijke ervaring biedt voor elke luisteraar.

## Beschrijving
### Ontwerp 
Het ontwerp van de header en de menu's is hetzelfde gebleven. De blauwe en roze kleuren van Radio Veronica zijn wat donkerder, om voor meer contrast te zorgen. 

<img src="https://github.com/user-attachments/assets/1b2a67c0-de0f-4cc5-b4a1-1a96fb7a6f98" width="250">

Uit eerder besproken feedback is de content van de show blokken verdeeld over de boven- en onderkant, om te veel witruimte te voorkomen. 

<img width="350" alt="image" src="https://github.com/user-attachments/assets/44ba083e-aaf3-4a9c-b496-bef393f85bf1"/><img width="350" alt="image" src="https://github.com/user-attachments/assets/1b75ab2a-1802-44ae-bec0-7c85eebcd878" />

Daarnaast is het overzicht met de programmering van de andere zenders nu ingeklapt, zodat een gebruiker zelf kan kiezen welke programmering getoond wordt. 

<img width="500" alt="image" src="https://github.com/user-attachments/assets/52e24963-977d-4d86-9d23-fd19350be453" /><img width="500" alt="image" src="https://github.com/user-attachments/assets/cf6348d0-2d4e-42b5-b17b-c403403fe085" />

### Eindresultaat
Bekijk hier de live website: https://julia-stevens.github.io/fix-the-flow-interactive-website/

Op mobiel krijgt de gebruiker het gedetailleerde overzicht te zien van één radiozender, en kan er via een menu tussen de zenders gewisseld worden. 

https://github.com/user-attachments/assets/7e9e6f74-be01-44d7-b9c8-b9538cd1d214

Op desktop heeft gebruiker zelf controle over welke programmering er te zien is. Dit kan dus van één zender zijn, maar ook van 2, 3 of 4 zenders. 

https://github.com/user-attachments/assets/54a872aa-fc91-4b60-bd4c-b80be60a126b

## Belangrijke features
### Audio player
Onderaan de pagina bevindt zich de werkende audio player. De play-knop is voorzien van een duidelijk label (Speel af) om feedforward aan de gebruiker te geven en de gebruiker dus weet dat iets af zal spelen. Bij het hoveren wordt de knop licht van kleur en verschijnt er een hover animatie. Wanneer er geklikt wordt, wordt de audio ingeladen en door het label (Laden), de lage helderheid en de animatie is het duidelijk dat de klik-actie van de gebruiker succesvol was en is er dus duidelijk feedback. Bij het afspelen verandert de afbeelding in een pauze-icoon, met het label 'Pauzeer'. Hiermee wordt weer feedforward gegeven, over dat bij een volgende klik de audio gepauzeerd wordt. 
Tot slot is er links en rechts van de progressie balk te zien hoe lang het nummer duurt, en hoeveel tijd er verstreken is. Daarnaast geeft de cirkel een indicator van de progressie van het nummer. 

https://github.com/user-attachments/assets/4f4c140d-ea07-4260-9f7d-c4c16cfba2a3

### Uitklapbaar programma overzicht
De uitklapbare programma overzichten hebben een beschrijving van wat er in de menu's te vinden is, zoals 'Bekijk het programma van SLAM'. Daarnaast staat er een knop met een pijl-icoon en een label met 'Open'. Hiermee weet de gebruiker dat er een menu naar links toe zal openen. Bij het hoveren over de knop verschijnt er een animatie en verlaagt de helderheid van de knop. Wanneer het programma geopend is, verandert de pijl van richting, en wijst naar rechts en staat er 'Sluit'. Hiermee weet de gebruiker dat het menu zich naar rechts toe zal sluiten. 

https://github.com/user-attachments/assets/bc1497e8-9f65-44c0-966b-5235de5db546

## Kenmerken
### HTML
Met name in HTML is er rekening gehouden met de toegankelijkheid van de website. Zo zijn er verschillende skip links toegevoegd, bij het navigeren met de tab-toets. 

https://github.com/user-attachments/assets/86969230-8778-4a9b-bf8b-6ebd96e7cea0

Daarnaast is hier een belangrijk deel van het uitklapbaar programma overzicht beschreven. Dit heb ik namelijk gemaakt met `details` en `summary`. In de `summary` staat de titel en in de rest van de `details` staat een `ol` met daarin de volledige programmatie van de zender. 

### CSS
De pagina wordt gestyled door verschillende CSS bestanden. De eerste is de stylesheet, waarin de huisstijl gedefinieerd wordt, zoals: kleur, typografie en knoppen. En in het tweede bestand is de volledige layout van de pagina geschreven. 

### JS
De interacties zijn vooral in JavaScript geschreven. Zo wordt de audio player met JavaScript van content voorzien en wordt er bij een klik op de play-knop een connectie gemaakt naar de 'laden' animatie in CSS. 

## Bronnen
* [Github Mediahuis](https://github.com/fdnd-agency/triple)
* [Stylesheet](https://github.com/vsheo/look-and-feel-styleguide)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
