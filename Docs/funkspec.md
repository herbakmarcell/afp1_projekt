# Funkcionális specifikáció
## 1. Jelenlegi helyzet

Jelenleg több mint ezer autósiskola működik az országban, akik különböző árazási rendszert alkalmaznak és eltérő szolgáltatási színvonalat nyújtanak. A jogosítványszerzés menetében az egyik legnehezebb, de ugyanakkor legmeghatározóbb kérdés az iskolaválasztás. Ezért szeretnénk egy olyan oldalt készíteni, ami egybefoglalja az összes információt arról, hogy az emberek hogyan szerezhetnek jogosítványt. Elérhetővé szeretnénk tenni az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve.

## 2. Vágyálom rendszer

Célunk egy olyan oldal készítése, amely elérhetővé teszi az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve, vizsgára jelentkezéssel, valamint vizsgára küldéssel. Így minden szükséges feladat teljesen digitális lesz, akár pár kattintással el lehet intézni őket.

## 3. Jelenlegi üzleti folyamatok modellje

Jelenleg az autósiskolák különféle vezetési tanfolyamokat kínálnak, például „B” kategóriás jogosítvány megszerzésére irányuló tanfolyamokat, motoros képzéseket („A” kategória), illetve teherautó vagy buszvezetői képzéseket is. Különböző csomagokat és árkategóriákat kínálnak, attól függően, hogy hány elméleti és gyakorlati órát tartalmaznak, illetve milyen extra szolgáltatások (pl. elméleti vizsga-felkészítő kurzusok, online tananyagok, stb.) érhetők el. A tanulók gyakran választhatnak olcsóbb alapcsomagot vagy bővített, több órát és konzultációt tartalmazó prémium csomagot. Az autósiskolák elméleti képzéseket is biztosítanak, melyeket gyakran online vagy tantermi formában tartanak. A gyakorlati órák általában előre meghatározott időpontokban zajlanak, és a diákok a saját tempójukban vehetik fel a szükséges óraszámot. 

## 10. Funkció - követelmény megfeleltetése

 | Id | Követelmény | Funkció |
 | :---: | --- | --- |
 | K1  | Hibamentes működés, 3NF| Az adatbázis a megfelelő normálformában van. |
 | K2  | Hibamentes működés, letisztult megjelenités, ellenőrzött regisztráció| A felhasználók ellenőrzött módon tudnak regisztrálni az oldalra. Adott feltételeknek megfelelő e-mail címet és jelszót adnak meg. Megfelelő módon kerülnek tárolásra a megadott adatok az adatbázisban. |
 | K3  | Hibamentes működés, letisztult megjelenités, ellenőrzött bejelentkezés| A regisztrált e-mail cím és a hozzá tartozó jelszó megadását követően az oldal bejelentkezteti a felhasználók a felületre. |
 | K4  | Hibamentes működés, letisztult megjelenités| Tisztán, elkülöníthetően és táblázatba rendezett módon jelennek meg az órék. Órarend elrendezésben. |
 | K5  | Hibamentes működés, letisztult megjelenités| Minden tanuló csak akkor jelentkezhet vizsgára, ha megfelel a követelményeknek. Sikeres KRESZ vizsga, elérte a gyakorlati órák megadott számát. |
 | K6  | Hibamentes működés, letisztult megjelenítés | Adott tanulók a jogosítvány megszerzésekor fizetnek az adott autósiskolának az oktatásért, az adott vizsgaközpontnak a vizsgadíjakért |
 | K7  | Hibamentes működés, letisztult megjelenítés | Bejelentkezést lehetősége van arra minden felhasználónak, hogy átírja a korábban már megadott adatait. Majd a módosítások után a mentésre kattintva az adatbázisban felülíródnak a megfelelő adatok. |
 