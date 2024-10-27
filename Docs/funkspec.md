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
