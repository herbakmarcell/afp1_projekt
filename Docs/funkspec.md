# Funkcionális specifikáció
## 1. Jelenlegi helyzet

Jelenleg több mint ezer autósiskola működik az országban, akik különböző árazási rendszert alkalmaznak és eltérő szolgáltatási színvonalat nyújtanak. A jogosítványszerzés menetében az egyik legnehezebb, de ugyanakkor legmeghatározóbb kérdés az iskolaválasztás. Ezért szeretnénk egy olyan oldalt készíteni, ami egybefoglalja az összes információt arról, hogy az emberek hogyan szerezhetnek jogosítványt. Elérhetővé szeretnénk tenni az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve.

## 2. Vágyálom rendszer

Célunk egy olyan oldal készítése, amely elérhetővé teszi az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve, vizsgára jelentkezéssel, valamint vizsgára küldéssel. Így minden szükséges feladat teljesen digitális lesz, akár pár kattintással el lehet intézni őket.

## 3. Jelenlegi üzleti folyamatok modellje

Jelenleg az autósiskolák különféle vezetési tanfolyamokat kínálnak, például „B” kategóriás jogosítvány megszerzésére irányuló tanfolyamokat, motoros képzéseket („A” kategória), illetve teherautó vagy buszvezetői képzéseket is. Különböző csomagokat és árkategóriákat kínálnak, attól függően, hogy hány elméleti és gyakorlati órát tartalmaznak, illetve milyen extra szolgáltatások (pl. elméleti vizsga-felkészítő kurzusok, online tananyagok, stb.) érhetők el. A tanulók gyakran választhatnak olcsóbb alapcsomagot vagy bővített, több órát és konzultációt tartalmazó prémium csomagot. Az autósiskolák elméleti képzéseket is biztosítanak, melyeket gyakran online vagy tantermi formában tartanak. A gyakorlati órák általában előre meghatározott időpontokban zajlanak, és a diákok a saját tempójukban vehetik fel a szükséges óraszámot. 

## 4. Igényelt üzleti folyamatok modellje

Egy olyan weboldal, amely átlátható, alkalmas felületet nyújt az autóiskolák működésére, jogosítvány szerzésére. Az alapmodellre épülő oldalunk a következőket tartalmazza:

 - Bejelentkezés
 - Regisztráció
 - Órarend megjelenítése
 - Saját adatok módosítása
 - Fizetés utalással
 - Órák követése, számlálása
 - Vizsgaidőpontok megadása
 - Vizsgajelentkezés
 - Tanulók értékelése
 - Jogokhoz kötött adatok módosítása

## 5. Követelménylista

| ID | Modul | Név | Kifejtés |
| :---: | --- | --- | --- |
| K1  | Szerver | Adatbázis  | Adatok tárolása |
| K2  | Felület | Regisztráció  | Felhasználó regisztrációja |
| K3  | Felület | Bejelentkezés  | Felhasználó bejelentkezése |
| K4  | Felület | Órarend  | A tanuló emberek órarendje |
| K5  | Felület | Óraszámok követése  |Az oktatók nyomonkövetik, hogy egyes tanulók hány óránál tartanak |
| K6  | Felület | Vizsgaidőpontok megadása  | A vizsgabiztosok időpontot adnak meg a vizsgáknak |
| K7  | Felület | Vizsgajelentkezés | A tanuló emberek vizsgákra jelentkezhetnek |
| K8 | Felület | Tanulók értékelése  | A vizsgabiztos eldönti, hogy egy adott tanuló sikeresen teljesítette a vizsgákat |
| K9  | Felület | Fizetés utalással | A szolgáltatás kifizetése bankkártyás utalással |
| K10  | Felület | Adatok módosítása | Minden bejelentkezett felhasználó a jogának megfelelően módosíthat adatokat |

## 6. Használati esetek

A felhasználó, amennyiben tanuló joggal rendelkezik, a főoldalon láthatja a felvett óráit, képes módosítani az alap adatain, jelentkezhet vizsgákra, valamint kifizethetni a szolgáltatást, amit átutalással teheti meg. Amennyiben a felhasználó, oktatóként lép be a rendszerbe, akkor listázhatja a saját tanulóit, valamint nyomonkövetheti, hogy melyik tanulók mennyi gyakorlati órát teljesített, rögzítheti az elméleti vizsga, egészségügyi vizsga és a gyakorlati órák díjait, ha kell módosítani is tudja. Vizsgabiztos joggal rendelkező felhasználók képesek a végső vizsgák időpontjainak megadására, és a tanulók értékelésére, ezzel együtt képesek inaktívvá tenni a tanulókat, akik sikertelenül zárták a vizsgákat.

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket

|ID|Leírás           |
|-------------------------|---------------------------|
|K1| Minden regisztrált felhasználóról a nevet, az e-mail címet és a jelszót, valamint a bankszámlaszámot tároljuk el. Kap minden felhaszná egy jogosultságot azonosító id-t, aminek segítségével az adott jogosultsághoz tartozó funkciók válnak elérhetővé. Eltároljuk a vizsgák (elméleti, gyakorlati) időpontjait, a hozzájuk tartozó oktatókkal és vizsgabiztosokkal együtt.|          
|K2| A felhasználónak regisztrálnia kell ha jogosítványt szeretne szerezni, vagy ha órát szeretne adni oktatóként vagy éppen ha vizsgabiztos szerepet kap. Név, e-mail cím és jelszó megadásával teheti meg ezt.|
|K3| A felhasználó a regisztrált e-mail címet és jelszót használva tud bejelentkezni az oldalra. Ezután lesznek elérhetők számára a jogosultságának megfelelő funkciók.|
|K4| Az órarend információt ad arról egy tanulónak, hogy mikor lesz a soron következő órája, az oktatónak segítséget nyújt az óraszámok nyomonkövetésében.|
|K5| Az oktatók nyomon tudják követni, hogy adott tanulók mennyi teljesített óraszámnál tartanak, megadhatják a következő órák időpontjait.|
|K6| A vizsgabiztosok képesek megadni a vizsgák időpontjait, amikre a követelményeknek megfelelő tanulók jelentkezhetnek.|
|K7| Amint egy tanuló elérte a megfelelő gyakorlati óraszámot, a KRESZ vizsgán is sikeresen átment, jelentkezhet vizsgára. |
|K8| A tanulókat a vizsgák után a vizsgabiztosok értékelhetik.|
|K9| A tanuló embereknek kötelességük fizetni a szolgáltatásért. Bankkártyás utalással tehetik ezt meg.|
|K10| A regisztrált felhasználók módosíthatnak a már korábban megadott adatokon, ami felülírásra kerül az adatbázisban.|

## 11. Fogalomszótár

* **Normálforma:** A harmadik normálforma (3NF) egy adatbázisséma, amely kapcsolódik a relációs adatbázisokat használó normalizáló elvekhez, amely csökkentse a párhuzamos adatokat, elkerülje adatok anomáliáit és hibáit, biztosítják a hivatkozási integritást és egyszerűsítsék az adatkezelést.
*  **Hibamentes működés:** Az alkalmazás vagy rendszer stabilan és megfelelően működik, anélkül, hogy hibákba ütközne. Ez biztosítja a felhasználói élmény zavartalanságát.
* **Letisztult megjelenítés:** Olyan felhasználói felület, amely egyszerű, könnyen áttekinthető, felesleges vizuális elemek nélkül. A hangsúly a funkcionalitáson és az átláthatóságon van.
* **Ellenőrzött regisztráció: A regisztrációs folyamat során a felhasználók által megadott adatok, például az e-mail cím és jelszó validálása. Ez biztosítja, hogy csak hiteles és szabályos adatokat adjanak meg a felhasználók.
* **Ellenőrzött bejelentkezés:** A felhasználók bejelentkezése a regisztráció során megadott e-mail cím és jelszó párossal történik. A rendszer ellenőrzi az adatok helyességét, mielőtt engedélyezné a hozzáférést.
* **Órarend elrendezés:** A felhasználók számára táblázatos formában megjelenített tanórák, amelyek áttekinthetőek és rendszerezettek, hasonlóan egy hagyományos órarendhez.
* **Vizsgára jelentkezés:** A funkció, amely lehetővé teszi a tanulók számára, hogy vizsgára jelentkezzenek, feltéve, hogy teljesítették a szükséges előfeltételeket (pl. KRESZ vizsga, gyakorlati órák száma).
* **Adatmódosítás és mentés:** A felhasználók számára elérhető lehetőség, hogy a korábban megadott adataikat frissítsék, és a módosításokat mentés után az adatbázis frissíti.
* **Fizetés az oktatásért és vizsgadíjak:** Az autósiskoláknak és vizsgaközpontoknak járó díjak kiegyenlítése a jogosítvány megszerzéséhez kapcsolódóan, amely magában foglalja az oktatási és vizsgaköltségeket.
