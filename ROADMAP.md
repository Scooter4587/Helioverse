# Helioverse – Roadmap

## Vízia
Spravodlivá, „turn-based“ 4X/management hra s denným limitom ťahov, férovým resetom vekov a perzistentnými účtami pre viac hráčov.

## Čas a štruktúra (core loop)
- **1 deň = 20 ťahov** (turnov). Turny sa prenášajú, ale za „vynechanie dňa“ je nevýhoda (penalizácia).
- **1 vek ≈ 45 dní** (~2 mesiace). Na konci veku **globálny reset** a štart novej sezóny.
- **Deadline**: polnoc **Europe/Bratislava**.
- **Multi-user**: každý hráč má vlastný účet/pamäť/základňu; systém musí zvládať viac hráčov naraz.

## Fázy
- **Phase 0 – Infra**: repo, CHANGELOG, Discord webhook ✅
- **Phase 1 – Core pravidlá**
  - Denný cap ťahov (20), prenášanie zostatku + penalizácia za „missed day“
  - Počítadlo dní, koniec veku (≈45 dní) a reset sezóny
  - Základ perzistencie hráča (multi-user rámec)
- **Phase 2 – Ekonomika & stavby**
  - Zdroje, produkčné budovy, queue akcií
  - Prehľad kolónií/staníc, upkeep, storage
- **Phase 3 – Interakcie**
  - Diplomacia/obchod, jednoduché konflikty/konkurencia
  - Eventy a misie
- **Phase 4 – UX a meta**
  - Dashboard, denné summary, notifikácie
  - Balans, telemetry, A/B testy

## To-Do (krátky backlog)
- [ ] Definovať presný model penalizácie za vynechaný deň
- [ ] Návrh dátovej štruktúry hráča (ID, konto, inventár, časové pečiatky)
- [ ] Špecifikovať reset veku (čo sa maže, čo ostáva)
- [ ] Minimálne API pre turn akcie (create/read/update)
- [ ] UX: denný prehľad ťahov + countdown do polnoci
- [ ] Dokument „Game Rules“ (detail pravidiel Phase 1)

## Poznámky
- Všetky zmeny zapisuj do `CHANGELOG.md` (najnovšia verzia navrchu).
- Väčšie úlohy najprv otvoriť ako **Issue** a prelinkovať v To-Do.