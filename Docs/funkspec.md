# Funkcionális specifikáció
## 1. Jelenlegi helyzet

Jelenleg több mint ezer autósiskola működik az országban, akik különböző árazási rendszert alkalmaznak és eltérő szolgáltatási színvonalat nyújtanak. A jogosítványszerzés menetében az egyik legnehezebb, de ugyanakkor legmeghatározóbb kérdés az iskolaválasztás. Ezért szeretnénk egy olyan oldalt készíteni, ami egybefoglalja az összes információt arról, hogy az emberek hogyan szerezhetnek jogosítványt. Elérhetővé szeretnénk tenni az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve.

## 2. Vágyálom rendszer

Célunk egy olyan oldal készítése, amely elérhetővé teszi az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve, vizsgára jelentkezéssel, valamint vizsgára küldéssel. Így minden szükséges feladat teljesen digitális lesz, akár pár kattintással el lehet intézni őket.

## 3. Jelenlegi üzleti folyamatok modellje

Jelenleg az autósiskolák különféle vezetési tanfolyamokat kínálnak, például „B” kategóriás jogosítvány megszerzésére irányuló tanfolyamokat, motoros képzéseket („A” kategória), illetve teherautó vagy buszvezetői képzéseket is. Különböző csomagokat és árkategóriákat kínálnak, attól függően, hogy hány elméleti és gyakorlati órát tartalmaznak, illetve milyen extra szolgáltatások (pl. elméleti vizsga-felkészítő kurzusok, online tananyagok, stb.) érhetők el. A tanulók gyakran választhatnak olcsóbb alapcsomagot vagy bővített, több órát és konzultációt tartalmazó prémium csomagot. Az autósiskolák elméleti képzéseket is biztosítanak, melyeket gyakran online vagy tantermi formában tartanak. A gyakorlati órák általában előre meghatározott időpontokban zajlanak, és a diákok a saját tempójukban vehetik fel a szükséges óraszámot. 

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
