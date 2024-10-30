# Követelmény Specifikáció
## 1. Áttekintés
A Professzorok azt a megbízást kapta, hogy készítsenek egy szoftvert, amely segíti a tanulóvezetőket, oktatókat, valamint vizsgabiztosokat az órák, vizsgák könnyebb lebonyolításában, rendszerezésében. Célunk egy olyan oldal készítése, amely elérhetővé teszi az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve, vizsgára jelentkezéssel, valamint vizsgára küldéssel. Így minden szükséges feladat teljesen digitális lesz, akár pár kattintással el lehet intézni őket. Így egy sokkal kényelmesebb rendszert bevezetve a régi, hagyományos rendszerhez képest. 

## 2. Jelenlegi helyzet 
Jelenleg az iskola egy régi rendszert használ, amelyben az információküldés, valamint szerzés korlátozott módon működik, így például a vizsgák kiírása több idő és feladat, amely csupán hátráltatja az optimális működést. A tanulók és az oktatók között az órák megszervezésénél több tényezőt is figyelembe kell venni, például az óraütközéseket, amelyeket a rendszer nem szűr automatikusan, ezért előfordulhatnak problémák, amelyeket manuálisan kell megoldani, ezen felül az oldal egy régi rendszeren alapszik, ezért az oldal betöltése, feladatok elvégzése lassabbak. A rendszeres karbantartás ellenére is gyakran fordulnak elő szerverhibák, ami miatt az oldal gyakran elérhetetlen, így a tanulók nem tudják megnézni a vizsgákat, órákat. Az oktatók és vizsgabiztosok nem tudnak új időpontokat létrehozni. A rendszer megbízhatatlansága miatt olyan problémák merülnek fel, amelyek automatikusan megoldhatóak lennének. Az adatok tárolása a gyakori leállások miatt nem mindig lehetséges, ezért többször kell megpróbálni felvinni az adatot a rendszerbe. Gyakoriak az adatvesztések, ezért sok óra és vizsga eltűnik a rendszerből, amelyet újra fel kell vinni. A jelenlegi helyzet több manuális műveletet követel, mint amennyi szükséges lenne, amennyiben a rendszer megbízható, aktív és optimalizált lenne. Összességében a szerver, valamint az oldal ellátja a feladatát, ugyanakkor nem nyújt megbízható szolgáltatásokat a felhasználóknak, ami rendkívül nehezíti a használatát.

## 3. Vágyálom rendszer 
Célunk egy olyan oldal fejlesztése, amely mindenki számára könnyen kezelhetővé teszi az iskolában. A weboldal lehetőséget ad majd a felhasználóknak a regisztrálásra, valamint a bejelentkezésre, valamint minden felhasznához tartozik majd egy jogkör, így az adatok láthatósága és kezelése is megfelelően korlátozható. A tanulók meg tudják tekintetni az órájukat, valamint vizsgájukat, amire az oktató küldi őket. Az oktatók létre tudnak hozni új órákat és meg is tudják nézni azokat. Amennyiben a tanuló megfelelően teljesít, tovább tudja küldeni vizsgázni. A vizsgabiztos meg tudja nézni vizsgáit, valamint azt, hogy melyik tanuló vizsgázik. Minden felhasználó megadhatja a személyes adatait, így a későbbi feladatok, mint például a vizsgadíj kifezetése, egyszerűen lebonyolítható. Mivel az oldal jogköröket kezel, ezért az olyan hibaesetek is ki vannak zárva, amikor a felhasználó hirdet meg új vizsgát, vagy az oktató jelentkezik vizsgára. Összességében az oldal minden szükségletet kielégít, beleértve a gyors elérést, könnyű kezelést és a megbízhatóságot.

## 4. Jelenlegi üzleti folyamatok modellje
Manapság az ilyen rendszerek már sokkal modernebb és előrehaladottabb szoftvereken alapulnak, amelyek gyorsabbak és egyszerűbbek. A régi technikák pedig elvesztik támogatásukat, ezért nem mindig tudják kielégíteni a felhasználók igényeit, mivel egyes funkciók már nem elérhetők. Jelenleg az ilyen szoftverek több jogkört is kezelnek, így minden felhasználó, csakis a saját jogkörébe tartozó információkat éri el, valamint tudja azokat módosítani. Az iskola jelenlegi rendszerében ezek a jogkörök megvannak, azonban már nem hatékonyak. A tranzakciók lebonyolítása sem végezhető el mindig az oldal lefagyása, vagy az adatok elvesztése miatt. Az oldalon megjelenő funkciók gyakran nem működnek. Összességében elmondható az, hogy a manapság már sokkal hatékonyabb és kezelhetőbb szoftvereket alkalmaznak az ilyen típusú feladatok ellátására, ezért nem meglepő, hogy a jelenleg használt, elavult szoftver már nem képes ellátni a feladatát.

## 5. Igényelt üzleti folyamatok modellje
Egy olyan oldal létrehozása, amely elérhetővé teszi a felhasználók számára az autósiskola ügyeinek egyszerű lebonyolitását. A tanulóknak lehetőségük lesz megtekinteni az órarendjüket, kifizetni a vizsga-, valamint óradíjakat. Az oktatók órákat hoznak létre, a vizsgabiztosok pedig vizsgákat. A tranzakcíókat pedig teljes mértékben az oldal intézi, így a tanulóknak elég csupán pát kattintás. Így egy könnyen kezelhető, valamint karbantartható rendszer jöhet létre, amely a friss, modern technológiákon alapszik. 
Az oldal nem sokban tér el a hasonló funckiót ellátó weboldalaktól. Az oldal tartalmazza:
 - Regisztráció, jogkör megadása
 - Bejelentkezés
 - Felhasználói adatok megváltoztatása
 - Óra-, vizsgadíjak kifizetése
 - Órák megtekintése
 - Új órák kiírása
 - Új vizsgák kíírása
 - Órák és vizsgák megtekintése
 - Tanuló küldése vizsgára

 ## 6. Követelménylista
 | ID | Modul | Név | Kifejtés|
 | :---: | :---: | :---: | :---: |
 | K1 | Weboldal | Főoldal | Főoldal dizájnja.|
 | K2 | Weboldal | Órarend | Órarend megtekintése. |
 | K3 | Weboldal | Felhasználó | A regisztrációs és bejelentkező felület. |
 | K4 | Weboldal | Profil | A már regisztrált felhasználó profiljának megtekintése. |
 | K5 | Felhasználókezelés | Regisztáció | Új felhasználó létrehozása. |
 | K6 | Felhasználókezelés | Bejelentkezés | Egy, már létező felhasználó bejelentkezése. |
 | K7 | Felhasználókezelés | Profilkezelés | A felhasználó adatainak szerkesztése. |
 | K8 | Weboldal | Vizsga | Vizsgák kiírása és megtekintése. |
 | K9 | Weboldal | Óra | Órák létrehozása és megtekintése az órarendben. |
 | K10 | Weboldal | Módosítások | Órák és vizsgák módosítása az órarendben. |
