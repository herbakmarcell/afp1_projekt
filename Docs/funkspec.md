# Funkcionális specifikáció
## 1. Jelenlegi helyzet

Jelenleg több mint ezer autósiskola működik az országban, akik különböző árazási rendszert alkalmaznak és eltérő szolgáltatási színvonalat nyújtanak. A jogosítványszerzés menetében az egyik legnehezebb, de ugyanakkor legmeghatározóbb kérdés az iskolaválasztás. Ezért szeretnénk egy olyan oldalt készíteni, ami egybefoglalja az összes információt arról, hogy az emberek hogyan szerezhetnek jogosítványt. Elérhetővé szeretnénk tenni az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve.

## 2. Vágyálom rendszer

Célunk egy olyan oldal készítése, amely elérhetővé teszi az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve, vizsgára jelentkezéssel, valamint vizsgára küldéssel. Így minden szükséges feladat teljesen digitális lesz, akár pár kattintással el lehet intézni őket.

## 3. Jelenlegi üzleti folyamatok modellje

Jelenleg az autósiskolák különféle vezetési tanfolyamokat kínálnak, például „B” kategóriás jogosítvány megszerzésére irányuló tanfolyamokat, motoros képzéseket („A” kategória), illetve teherautó vagy buszvezetői képzéseket is. Különböző csomagokat és árkategóriákat kínálnak, attól függően, hogy hány elméleti és gyakorlati órát tartalmaznak, illetve milyen extra szolgáltatások (pl. elméleti vizsga-felkészítő kurzusok, online tananyagok, stb.) érhetők el. A tanulók gyakran választhatnak olcsóbb alapcsomagot vagy bővített, több órát és konzultációt tartalmazó prémium csomagot. Az autósiskolák elméleti képzéseket is biztosítanak, melyeket gyakran online vagy tantermi formában tartanak. A gyakorlati órák általában előre meghatározott időpontokban zajlanak, és a diákok a saját tempójukban vehetik fel a szükséges óraszámot. 

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket

|ID|Leírás           |
|-------------------------|---------------------------|
|K1| Minden regisztrált felhasználóról a nevet, az e-mail címet és a jelszót, valamint a bankszámlaszámot tároljuk el. Kap minden felhaszná egy jogosultságot azonosító id-t, aminek segítségével az adott jogosultsághoz tartozó funkciók válnak elérhetővé. Eltároljuk a vizsgák (elméleti, gyakorlati) időpontjait, a hozzájuk tartozó oktatókkal és vizsgabiztosokkal együtt.|          
|K2| A felhasználónak regisztrálnia kell ha jogosítványt szeretne szerezni, vagy ha órát szeretne adni oktatóként vagy éppen ha vizsgabiztos szerepet kap. Név, e-mail cím és jelszó megadásával teheti meg ezt.|
|K3| A felhasználó a regisztrált e-mail címet és jelszót használva tud bejelentkezni az oldalra. Ezután lesznek elérhetők számára a jogosultságának megfelelő funkciók.|
|K4| Az órarend információt ad arról egy tanulónak, hogy mikor lesz a soron következő órája, az oktatónak segítséget nyújt az óraszámok nyomonkövetésében.|
|K5| Amint egy tanuló elérte a megfelelő gyakorlati óraszámot, a KRESZ vizsgán is sikeresen átment, jelentkezhet vizsgára. |
|K6| A tanuló embereknek kötelességük fizetni a szolgáltatásért.|
|K7| A regisztrált felhasználók módosíthatnak a már korábban megadott adatokon, ami felülírásra kerül az adatbázisban.|
