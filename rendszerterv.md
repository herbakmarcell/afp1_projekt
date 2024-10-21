## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek
* Scrum master:
  -   Herbák Marcell 
* Product owner:
  -   Herbák Marcell 
* Üzleti szereplő:
  -  Györkis Tamás

### 2.3 Ütemterv
|Funkció                  | Feladat                   | Prioritás | Becslés (nap) | Aktuális becslés (nap) | Eltelt idő (nap) | Határidő (nap) |
|-------------------------|---------------------------|-----------|---------------|------------------------|------------------|---------------------|
|Követelmény specifikáció |Megírás                    |         1 |             3 |                      0 |                0 |                   0 |
|Funkcionális specifikáció|Megírás                    |         1 |             3 |                      0 |                0 |                   0 |
|Rendszerterv             |Megírás                    |         1 |             3 |                      0 |                0 |                   0 |
|Program                  |Vizuális tervek elkészítése|         2 |             3 |                      0 |                0 |                   0 |
|Program                  |Prototípus elkészítése     |         3 |             7 |                      0 |                0 |                   0 |
|Program                  |Alapfunkciók elkészítése   |         3 |             15 |                      0 |                0 |                   0 |
|Program                  |Extra funkciók elkészítése |         3 |             10 |                      0 |                0 |                   0 |
|Program                  |Tesztelés                  |         4 |             4 |                      0 |                0 |                   0 |

## 4. Követelmények
### Követelménytáblázat
|  ID  |  Modul  |  Név  |  Kifejtés  |
| :--: | :-----: | :---- | :--------- |
| K1   | Szerver | Adatbázis | Adatok tárolása |
| K2   | Felület | Regisztráció | Oktató, tanuló, vizsgabiztos regisztrációja |
| K3   | Felület | Bejelentkezés | Oktató, tanuló, vizsgabiztos bejelentkezése |
| K4   | Felület | Órarend | Oktatók és hozzájuk tartozó tanulók megjelenítése |
| K5   | Felület | Órarend | Egy hétre lebontva megjelenik az adott tanuló melyik oktatóval, hány órakkor fog vezetni |
| K6   | Felület | Órarend | Az órarendet az oktató szerkesztheti és módosíthatja |
| K7   | Felület | Vizsga | A vizsgákat az oktatók és vizsgabiztosok is meg tudnak hirdetni |
| K8   | Felület | Vizsgára jelentkezés  | A tanulók tudnak jelentkezni különféle vizsgákra | 
| K9   | Felület | Vizsga kifizetése  | A tanulók kifizetik a vizsgákat és csak akkor tudják teljesíteni azokat |
| K10 | Felület | Tanulók értékelése | Az oktatók értékelik a tanulókat a vizsgákon  

### Funkcionális
- A regisztráció során adatok eltárolása az adatbázisba
- Bejelentkeztetés során az adatbázisban lévő oktatók, tanulók, vizsgabiztosok adatainak pontos összehasonlítása az aktuálisan megadottakkal
- Az órarend helyesen tölti be az adatokat
- Egy tanuló nem tud több oktatóhoz jelentkezni egy időben 
- A vizsgák a paramétereknek megfelelően jelennek meg és lehet őket felvenni
- A vizsgákat az oktató és vizsgabiztos is tudja módosítani és szerkeszteni
- A tanuló nem tudja az összes vizsgatípust felvenni egyszerre, csak az előfeltételek teljesítésével veheti fel őket 

### Nem funkcionális
- Gyors és folyamatos szerver és kliens kommunikáció

## 7. Architechtúrális terv

## 12. Karbantartási terv
