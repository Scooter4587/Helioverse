# 🚀 Helioverse – Roadmap (story-driven)

## Fáza 0 – Zrodenie projektu *(Infra) ✅*
Všetko začína čistým kódom a pevným základom. Máme:  
- funkčný repozitár,  
- changelog s automatickým publikovaním na Discord,  
- prvé herné UI (HUD, turns, END TURN queue),  
- základnú dokumentáciu (README, LORE.md).  

💡 *Projekt stojí na pevnej pôde. Máme kostru, na ktorú budeme stavať telo hry.*  

---

## Fáza 1 – Pravidlá času a vekov *(Core Rules)*
Hráč vstupuje do sústavy **Helionis** a zisťuje, že čas tu plynie inak:  
- **1 deň = 20 ťahov**. Môžeš si ich odložiť, ale len do určitého limitu.  
- **1 Age = 45 dní**, na konci prichádza **reset**, nový cyklus.  
- Deadline je vždy **polnoc Helionu (Europe/Bratislava)**.  

### Checklist
- [ ] Turns systém so všetkými efektmi (cap, penalizácia, prenášanie)  
- [ ] Reset Age a Season  
- [ ] Fair play systém (nikto nemá výhodu z no-life grindovania)  

💡 *V tejto fáze sa učíme plynúť s časom sústavy.*  

---

## Fáza 2 – Príbeh a LORE *(Narrative Worldbook)*
Keď čas začal plynúť, musíme poznať dejiny a aktérov:  
- **Frakcie**: Troopers, Corporates, Freelancers, Miner Guild – štyri cesty života.  
- **Rasy**: Terrans, Sylvans, Synths, Aether – rôzne silné a slabé stránky.  
- **Svet**: hviezda Helion, planéty, anomálie, orbitálne cykly.  
- **He-3**: krv sústavy – mena aj palivo.  

### Checklist
- [ ] Detailné lore pre každú frakciu  
- [ ] Profily rás (prebytky/deficity, bonusy)  
- [ ] Worldbook: základná mapa sústavy Helionis  
- [ ] Banky, trh, kontrakty – opísané v dokumente  

💡 *Budujeme „encyklopédiu sveta“, aby mal hráč pocit, že žije vo vesmíre, nie v tabuľke.*  

---

## Fáza 3 – Základňa a život *(Base & Citizens)*
Každý hráč má svoju základňu – miesto, kde sa rozhoduje o osude.  
- **Ľavý panel:** vek, turns, populácia, spokojnosť, energia.  
- **Jobs:** Baníci, Stavbári, Technici, Vedci, Policajti…  
- **Platy a spokojnosť:** nízke → rebelia, vysoké → nespokojnosť iných.  
- **Buildings:** Housing, Storage, Power, Infrastructure.  

### Checklist
- [ ] Jobs systém s pending → END TURN aplikáciou  
- [ ] Skill/experience systém pre občanov  
- [ ] Platy (min/opt/max) + spokojnosť vs. kriminalita  
- [ ] Budovy ako kapacity a multiplikátory  

💡 *Tu vzniká srdce hry – management, ktorý rozhoduje o sile základne.*  

---

## Fáza 4 – Suroviny a ekonomika *(Resources & Economy)*
Keď základňa stojí, prichádza otázka: z čoho bude žiť?  
- **Core resources:** Titanium Ore → Titanium + He-3.  
- **He-3**: výplaty, údržba, palivo, poplatky.  
- **Market:** ceny sa hýbu podľa supply/demand.  
- **Storage & upkeep:** kapacita, degradácia, inflácia.  

### Checklist
- [ ] Implementácia základných resource flows  
- [ ] Storage kapacity  
- [ ] Denný trh s cenami a poplatkami  
- [ ] Eventy ovplyvňujúce ceny (pirátstvo, prebytky, embargo)  

💡 *Ekonomika sa stáva motorom – základňa dýcha, rastie a spotrebúva.*  

---

## Fáza 5 – Mapy a expedície *(The System Comes Alive)*
Sústava Helionis sa otvára – mapa už nie je len pozadie, ale živý priestor.  
- **Planéty a orbity:** každé 2h posun.  
- **Anomálie:** ionové búrky, rift, ruiny.  
- **Flotily:** mining ships, freightery, probes.  
- **Cesty:** vzdialenosť = čas, He-3 = palivo.  

### Checklist
- [ ] Mapa s orbitami planét  
- [ ] Travel systém (distance, time, He-3)  
- [ ] Anomálie a eventy na mape  
- [ ] Prvé flotily a pohyb lodí  

💡 *Vesmír sa začína hýbať – hra prestáva byť len o tvojej základni.*  

---

## Fáza 6 – Aliancie, artefakty, meta *(The Endgame)*
Na konci každého Age ide o prestíž a moc.  
- **Aliancie:** social + kooperácia, spoločný chat.  
- **Artefakty:** unikátne buffy, ktoré menia pravidlá.  
- **Control points:** boj o anomálie a teritóriá.  
- **Výhra:** aliancia s najvyšším artefact power score.  

### Checklist
- [ ] Aliancie a základné sociálne mechaniky  
- [ ] Artefakty (moduly buffov)  
- [ ] Endgame systém (výhra Age)  
- [ ] Reset → nový Age  

💡 *Helioverse sa stáva spoločenskou hrou s komunitou, nie len solo sandboxom.*  