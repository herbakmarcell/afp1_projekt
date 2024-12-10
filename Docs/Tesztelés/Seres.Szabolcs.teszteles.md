# Tesztjegyzőkönyv
## Tesztelő: Seres Szabolcs
## Utolsó módosítás: 2024. 12. 10.

Operációs rendszer: Windows 11

Böngészők: Google Chrome, Opera

Ebben a dokumentumban lesz felsorolva az elvégzett tesztek elvárásai és eredményei. (Alfa, Béta és Végleges teszt)

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Adatbázis | 2024.11.05 | Az adatbázis a megfelelő paraméterekkel létre van hozva, kapcsolódik az oldalhoz | Sikeresen kapcsolódik az oldalhoz | Nem találtam hibát
| Regisztráció | 2024.11.05 | A felhasználó sikeresen be tud regisztrálni | Sikeresen be tudott regisztrálni | Nem találtam hibát
| JWT token | 2024.11.05 | A regisztrált felhasználóhoz bejelentkezéskor hozzárendel egy tokent | Sikeren történt meg a token hozzárendelése a felhasználóhoz | Nem találtam hibát
| Bejelentkezés | 2024.11.05 | A token hozzárendelése után a felhasználó be tud lépni az oldalra | Sikeresen történt meg az oldalra bejelentkezés | Nem találtam hibát
| Főoldal | 2024.11.05 | Bejelentkezés után a felhasználót a főoldalra navigálja az oldal | Bejelntkezés után a főoldalt mutatja a felhasználónak | Nem találtam hibát
| Profil adatok módosítása | 2024.11.05 | A bejelentkezett felhasználó adatait mutassa az oldal és tudja azokat módosítani | A módosítás sikeresen végbement | Nem találtam hibát
| Navbar | 2024.11.05 | A navigációs menü során a felhasználó adatainak módosítása után is a megfelelő név jelenik meg ott | A kritériumnak megfelelt | Nem találtam hibát

Az alfa tesztelésnél a funkciók a frontend és backend területén is rendeltetésszerűen működtek nem találtam hibát. A további újabb funkciók lesznek hozzáadva az oldalhoz amiket a béta teszt esetnél fogok tesztelni.

## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Adatbázis | 2024.11.24 | Módosított adatbázis rendeltetés szerűen működik | A kritériumnak megfelelően működik | Nem találtam hibát |
| Több felhasználói jogosultság betöltése az adatbázisba | 2024.11.24 | Az adatbázis rendeltetésszerűen tudja kezelni a jogosultságokat | Sikeresen megfelelt az elvárás| Nem találtam hibát
| Tanuló vizsgára jelentkezés | 2024.11.24 | A tanuló a meghirdetett vizsgaalkalmakra tud jelentkezni és vissza is tudja vonni a jelentkezését | A funkció működik az oldalon | Nem találtam hibát
| A tanuló kifizetéseinek megtekintése, kifizetések befizetése | 2024.11.24 | A tanuló meg tudja tekinteni a kifizetéseit és be is tudja fizetni a feltüntetetteket | A tanuló meg tudta tekinteni a kifizetéseit és be is tudta fizetni| Nem találtam hibát
| Előrehaladás megtekintése a tanulónak | 2024.11.24 | A tanuló meg tudja tekinteni az előrehaladását minden egyes vizsgának, függetlenül attól, hogy jelentkezett vagy nem rájuk, csak akkor ha frissíti az oldalt manuálisan | A funkció félkész állapotban van | Nem találtam hibát
| Footer | 2024.11.24 | A footeren lévő linkek megfelelően működnek | Megfelelően működik a funkció | Nem találtam hibát
| Admin oldal, jogkörök módosítása | 2024.11.24 | Admin felhasználói jogosultsággal rendelkező felhasználó az admin oldalra jut, tudja módosítani a jogköröket az adott felhasználónak |Az admin tudja módosítani mások jogosultsági körét a sajátját nem | Nem találtam problémát
| Órarend | 2024.11.24 | A felhasználó meg tudja tekinteni az órarendet ha oktató, tanuló, mindenki csak a sajátját | Rendeltetésszerűen működik a funkció | Nem találtam problémát
| Oktató módosítja az órákat | 2024.11.24 | Az oktató tudja a meglévő órarendet módosítani | Sikeresen történik meg az elvárt funkció | Nem találtam problémát
| Vizsga statisztikáinak megjelenítése | 2024.11.24 | A vizsga statisztikák megfelelően jelennek meg | A vizsga statisztikák nem megfelelően jelennek meg | Hibát találtam

A Béta tesztben az előrehaladás megtekintése a tanulónál csak frissítés alapján hozza az elvárt eredményt. 
A végleges tesztelésben prioritást fog élvezni ezen funkció kijavítása.

A végleges tesztelésben prioritást élvez a vizsgák statisztikáinak javítása.


## Végleges teszt
 | Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Előrehaladás a tanulónál| 2024.12.10 | Előrehaladás tanulónál autómatikusan frissíti az oldalt | Sikeresen működik a funkció | Nem találtam hibát
| Tanuló oktatót választ | 2024.12.10 | A tanuló ki tudja választani hogy melyik oktatóhoz szeretne jelentkezni aki tartja számára a vizsgát | A funkció sikeresen működik | Nem találtam hibát
| 404 oldal | 2024.12.10 |A nem megfelelő url látogatása esetén hiba oldalra navigálás | Sikeresen működik a funkció | Nem találtam hibát
| Vizsga statisztikáinak megjelenítése | 2024.12.10 | A vizsga statisztikák megfelelően jelennek meg | A vizsga statisztikák megfelelően jelennek meg | Nem találtam hibát


A végleges tesztben az oldal funkciói ellenőrzésre kerültek itt csak az új még nem tesztelt funkciók lettek felsorolva. Nem találtam olyan hibát ami akadályozná az oldal vagy a felhasználók interakcióit a weboldallal. A végleges teszt sikeresnek bizonyult, az oldal sikeresen átadható a megrendelőnek minden nagyobb hibafaktor javításra került.

Befejezve: 2024.12.10