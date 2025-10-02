# 🌌 Helioverse — LORE & Worldbook (draft v1)

> Živý dokument. Budeme ho priebežne rozširovať a verzovať.

---

## 1) Svet & Mapa

**Sústava:** *Helionis* — jediná hviezdna sústava projektu Helioverse.  
**Stred:** hviezda **Helion** na súradniciach **(0, 0)**.  
**Súradnice:** 2D rovina v „system units“ (**su**), odporúčaný rozsah mapy `[-1000, 1000]`.

**Orbity a čas:**
- Mapa „tiká“ každé **2 hodiny** reálneho času (map tick).  
- Planéty sa posúvajú po **kruhových / jemne excentrických** orbitách.  
- Anomálie môžu byť **fixné** alebo s **driftom** (kruhový pohyb), majú **životnosť v tickoch**.

**Základne hráčov:**
- Každá základňa má **pevné súradnice (x, y)**.  
- Platí pravidlo **minimálnej vzdialenosti** od iných entít, aby nevznikali kolízie.

**Cesty / lety:**
- Čas letu = euklidovská vzdialenosť / rýchlosť lode (v su/h).  
- Neskôr pridáme vplyv anomálií (spomalenie, poškodenie, rušenie radaru).

**Typy entít:**
- **Hviezda:** Helion (0,0).  
- **Planéty:** triedy (Terran, Desert, Ice, GasGiant, Volcanic, Oceanic, Barren).  
- **Anomálie:** Nebula, IonStorm, WreckField, Ruins, Rift, PirateDen.  
- **Stanice / body záujmu:** budeme dopĺňať podľa gameplayu.

---

## 2) Frakcie (štýly hry)

Frakcia definuje **povahu ekonomiky** a „vzťahy so svetom“. Každá má flavor bonusy a „knobs“ (parametre).

1. **Trooper (Defense Force)**  
   - Obranné kontrakty, stabilita, boj s faunou a pirátmi.  
   - Výhody: nižšia kriminalita, **štátne príspevky viazané na KPI**, lacnejšie obrany.

2. **Corporate (Korporácie)**  
   - Trh, banky, logistika, arbitráž.  
   - Výhody: nižšie **trhové poplatky**, lepšie **kurzy**, prístup k **bankovým produktom**.

3. **Freelancer (Slobodní kapitáni)**  
   - Výskum, artefakty, expedície, aliancie.  
   - Výhody: vyššia **šanca na nálezy**, silné synergy s **výskumom** a eventmi.

4. **Miner Guild (Ťažiari)**  
   - Ťažba a priemysel, jednoduchší štart.  
   - Výhody: bonusové **ťaženie** základných rúd a lacnejšia ťažobná infra.

> **Pozn.:** Frakcia ≠ rasa. Frakcia je „povolanie/ekonomický model“, rasa je „kto si“.

---

## 3) Rasy (identity a modifikátory)

Každá rasa má:  
**(a)** krátky príbeh, **(b)** prebytok (export), **(c)** deficit (import), **(d)** pasívne bonusy.  
Neskôr špecifikujeme rozdiel **„na základni“ vs. „vo flotile“** (radar, neviditeľnosť, nosnosť, rýchlosť…).

- **Terrans (ľudia)** — prispôsobiví univerzáli.  
  - Prebytok: bežné kovy (napr. Titanium Ore).  
  - Deficit: vzácne kryštály.  
  - Pasívne: +efektivita stavby / flexibilné náklady.

- **Sylvans (bio-symbiotickí)** — harmónia s organikou.  
  - Prebytok: bio/food, organické materiály.  
  - Deficit: ťažké kovy.  
  - Pasívne: +spokojnosť / bonusy z bio-produkcie.

- **Synths (syntetici)** — automatizácia a energia.  
  - Prebytok: elektronika, energetické články.  
  - Deficit: organické suroviny.  
  - Pasívne: −spotreba energie infra, **radar bonus** flotíl.

- **Aether (psionickí/energetickí)** — tajomné entity.  
  - Prebytok: kryštály / energetické kvantá.  
  - Deficit: fyzické komodity.  
  - Pasívne: +výskumné nálezy, špec. psi sloty.

> **TODO:** Rozšíriť rasy o „base vs fleet“ efekty (inšpirácia: radar/neviditeľnosť/nosnosť/rýchlosť/…).

---

## 4) He-3 — mena aj stratégia

**Dual-use:**  
- **Mena:** výplaty, dane, trh, poplatky, banky.  
- **Spotreba:** palivo flotíl, špeciálne moduly/reaktory.

**Inflow (príjmy He-3):**
- Ťažba / **rafinácia** (viď Suroviny).  
- Dane z ekonomiky (Corporate bonusy).  
- Kontrakty (Trooper/Miner – viazané na KPI).  
- Eventy / expedície (Freelancer).  
- Depozitné úroky (malé).

**Outflow (náklady He-3):**
- **Výplaty**, **údržba infra**, **palivo**, **trhové provízie**, **bankové poplatky/úrok**, diplomacia.

**Banky:**
- **Deposit APR/day**: malé percento (parkovanie, nie farma).  
- **Loan APR/day**: vyššie, denné splátky, vyžaduje **kolateral**.  
- **Treasury rate** (centrálna sadzba): jemne reguluje infláciu a poplatky.

**Antiinflácia:**
- Denné **capy** / diminishing returns.  
- Progresívna **údržba** s veľkosťou základne.  
- Automatické doladenie treasury (poplatky, APR) podľa stavu ekonomiky.

---

## 5) Suroviny (jadro → rozšírenie)

**Core (štart):**
- **Titanium Ore** → **rafinácia** → **Titanium** + *malý bonus He-3*  
  - Príklad: `Titanium = Ore * α`, `He-3 = Ore * β`, kde `α ≈ 0.8–0.95`, `β ≈ 0.01–0.03`.  
  - Rafinácia vyžaduje **čas/energiu/technikou prácu**.  
- **Helium-3** — viď kapitola 4.

**Rozšírenie (cieľ 20–25):**
- Food/Bio, Electronics, Diamonds, Crystals, Artefacts, …  
- Každý resource má jasné **linky** (kde sa míňa, čo odomyká).

**Storage (budúce):**
- Kapacity, kvalita skladovania, degradácia (Corporate výhody).

---

## 6) Jobs & Buildings (ekonomika práce)

**Population pool** → prideľuješ do **Jobs**:
- **Miner** (ťaží Ore, discovery He-3),  
- **Builder** (stavba, city progress),  
- **Technician** (rafinácia Ore → Titanium + He-3),  
- **Researcher/Scientist** (výskum, artefakty),  
- **Police/Soldier** (bezpečnosť, incidenty),  
- **Agent** (špec. operácie, vplyv),  
- **Admin** (dane, trh, účtovníctvo).

**Mechanika na ťahy:**
- V ťahu prideľuješ ľudí a nastavuješ **platy** → všetko ide do **pending**.  
- **END TURN**: pending sa aplikuje naraz; **TurnsLeft −1**, **TotalTurns++**.

**Skill (zapracovanie):**
- 0–100; rastie, keď človek ostáva v jobe; zmena jobu = dočasný pokles výkonu.

**Platy (bez inflácie):**
- Definované v násobkoch **CLI (Cost of Living Index)** viazaného na trh.  
- Každý job má **min/opt/max**:  
  - pod min → penalizácia výkonu,  
  - nad opt → malý bonus,  
  - nad max → „neférovosť“ (tlaky na spokojnosť inde).  
- **Payroll** (suma výplat) = priamy **He-3 outflow**.

**Dane:**
- He-3 príjem ↔ **Spokojnosť/Crime** (vyššie dane = viac príjmu, ale spoločenské riziká).

**Buildings:**
- Kapacity (Housing, Energy, Storage), multiplikátory jobov, odomknutia nových systémov.

---

## 7) Trh & ceny

**Denný spot** (na polnoc):  
- Cena ≈ **EMA** baseline ± **elasticita** (supply/demand) ± **malý šum** ± **eventy**.  
- **Clamp** ±X %/deň (anti-spike), **objemové limity** na hráča, **poplatky** (frakčne modifikované).

**Vzťahy / frakcie:**
- Bonusy menia **kurzy/poplatky**, nie teleporty ceny (realistickejšie správanie).

---

## 8) Aliancie, artefakty, ciele sezóny

- **Aliancie**: social + kooperácia, spoločné kontrakty/bonusy, interný chat.  
- **Artefakty**: moduly pravidiel (napr. *Radar +200%*, *−10% global crime*, *+X% research*).  
- **Control points** v sústave: boj o územie v pokojnom rytme.  
- **Výhra**: aliancia s najvyšším **artefact power score** na konci **éry** (sezóny).

---

## 9) Tempo & offline pravidlá

- **1–2 loginy/deň stačia.**  
- **Ťahy** sa **akumulujú** do capu (napr. 2–3 dni).  
- **Low-power mode** pri dlhšom off: 40–60 % produkcie (nič sa „nekazí“).  
- Údržba a úvery sa **účtujú** aj offline → zanedbanie bolí, ale je **zvratné**.

---

## 10) UI & aktuálny dev stav (pre gameplay)

- **Header/HUD:** dátum/čas (TZ), **END TURN**, Turns.  
- **Footer:** navigácia (Status / Základňa / Hangár) + indikátor **He-3**.  
- **Left panel (Základňa):**  
  - **Age**, **Turns (zostáva / total)**,  
  - **Population**, **Employment %**,  
  - **City (lvl + progress ⇒ veľkosť)**,  
  - **Satisfaction**, **Crime**, **Rebels**,  
  - **Energy**, **Base Power**.  
- **Center:** manažment (jobs, buildings, storage, trh) — placeholder.  
- **Mechanika pending → END TURN**: hotová; všetko sa aplikuje naraz.

---

## 11) TODO – najbližšie kroky v lore

- **Rasy – detailné profily** (base vs fleet efekty, prebytky/deficity).  
- **Planéty – názvy a popisy**, mapové „biomy“ a výskyt zdrojov.  
- **Frakčné kontrakty** (príklady KPI a odmien).  
- **Banky – model účtu/úveru** s treasury parametrami.  
- **Eventy – 1 rozhodnutie/deň** (voliteľné), malé efekty do systémov.

---

*Poznámky k verziám:*  
Tento súbor budeme udržiavať v changelogu (sekcia **Notes**), keď spravíme významné úpravy lore.