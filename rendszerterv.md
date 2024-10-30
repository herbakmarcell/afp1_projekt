## 1. A rendszer célja
Jelenleg több mint ezer autósiskola működik az országban, akik különböző árazási rendszert alkalmaznak és eltérő szolgáltatási színvonalat nyújtanak. A jogosítványszerzés menetében az egyik legnehezebb, de ugyanakkor legmeghatározóbb kérdés az iskolaválasztás. Ezért szeretnénk egy olyan oldalt készíteni, ami egybefoglalja az összes információt arról, hogy az emberek hogyan szerezhetnek jogosítványt. Elérhetővé szeretnénk tenni az akadálymentes információszerzést az autósiskolának, mind az órák, mind a vizsgák időpontjait tekintve.
Az oldal kezelni fogja az oktatókat, vizsgabiztosokat és tanulókat akiknek külön jogosultságuk van ami azt teszi lehetővé hogy csak a jogkörnek megfelelő funkciókat tudják elvégezni.
Az oktató meg tudja tekinteni, hogy egy héten hány tanuló van beírva az órarendjébe és milyen időközönként. A tanuló is látja hogy melyik oktató melyik nap, hány órakkor ér rá vezetni.
A tanulóknak segítséget nyújt, hogy az oldal monitorozza, hogy éppen hol tart a vizsgákban, információkat ad hogy melyiket teljesítette vagy nem teljesítette, vagy pedig még nem jelentkezett az adott vizsgára ami legyen elméleti, egészségügyi vagy gyakorlati(vezetési) vizsgaalkalmak.
A vizsgabiztos tud kiírni vizsgaalkalmakat és módosítani is tudja azokat.
A vizsgák teljesítéséhez egy megadott összeget kell befizetni és csak akkor kezdheti el a tanuló a vizsgát.

## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek
* Scrum master:
  -   Herbák Marcell 
* Product owner:
  -   Herbák Marcell 
* Üzleti szereplő:
  -  Györkis Tamás
### 2.2 Projekmunkások és felelősségek
* Frontend:
  - Szkleván Richárd
  - Seres Szabolcs
* Backend:
  - Szabó Richárd
  - Vastag Demeter
* Tesztelés:
  - Seres Szabolcs
  - Vastag Demeter
  - Szkleván Richárd
  - Szabó Richárd 
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

### 2.4 Mérföldkövek
   * - Követelményspecifikáció elkészítve
   * - Funkcionális specifikáció elkészítve
   * - Rendszerterv elkészítve
   * - Backend és Front-end elkészítve
   * - Előzetes tesztelések elkészítve
   * - Kész oldal prezentálása

## 3. Üzleti folyamatok modellje
![Üzleti folyamatok](/Img/uzleti_folyamatok_modellje.png)

## 3.1 Üzleti szereplők
Az oldal használatához regisztrációra és bejelentkezésre lesz szükség a felhasználóknak. Az oktató csak akkor tud hozzáadni az órarendjéhez tanulót ha mindkettőjüknek van felhasználói fiókja. A különböző műveleteket amiket végezhetnek a felhasználók függetlenül, hogy ők tanulók, oktatók, vagy vizsgabiztosok elengedhetetlen, hogy be legyenek jelentkezve a felületre.

### 3.2 Üzleti folyamatok
Az oldal meglátogatása után a felhasználó megtekintheti a főoldalt, ahol hasznos információkat talál a weboldalról és annak használatáról. Ezen felül regisztrálhat és bejelentkezhet az oldalra, regisztrációnál 3 féle szerepkör közül választhat: tanuló, oktató és vizsgabiztos. Bejelentkezés után a szerepkörhöz megfelelő funkciók lesznek elérhetők. Az összes szerepkörnek elérhető egy órarend és a saját felhasználói adatainak módosítása. Tanulóként elérhető még egy számlakiegyenlítés és egy vizsgára jelentkezés menüpont. Oktatóként megtekinthető a saját tanulók listája, vizsgadíjak, óradíjak rögzítése, tanuló előrehaladásának megtekintése valamint a vizsga időpontok rögzítése a tanuló számára. Vizsgabiztosként pedig vizsgadíj és vizsgaidőpont rögzíthető.

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
| K10 | Felület | Tanulók értékelése | A vizsgabiztosok értékelik a tanulókat a vizsgákon  

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

## 5. Funkcionális terv

### 5.1 Rendszerszereplők
A rendszer egy szerveren (host) gépen fut, amelyet a felhasználók (kliensek) egy webböngészőn keresztül érnek el. A felhasználók között az alabbi jogosultságok oszlanak meg:

| Felhasználói jogkör | Jogok |
|---------------------|-------|
| no_login | Regisztráció és bejelentkezés, Főoldal információk megtekintése |
| Tanuló | Órarend megtekintése, Saját felhasználói adatok módosítása, Számlakiegyenlítés, Vizsgára jelentkezés |
| Oktató | Órarend megtekintése, Saját felhasználói adatok módosítása, Saját tanulók listája, Vizsgadíjak/Óradíjak rögzítése és módosítása, Tanuló előrehaladásának megtekintése, Vizsga időpontok rögzítése a tanuló számára |
| Vizsgabiztos | Órarend megtekintése, Saját felhasználói adatok módosítása, Vizsgadíj rögzítése/módosítása, Vizsgaidőpontok rögzítése/módosítása |
| Admin | Tanuló + Oktató + Vizsgabiztos, Más felhasználók adatainak módosítása, Felhasználók törlése |

### 5.2 Menü-hierarchia
* Felhasználó
  - Regisztráció
  - Bejelentkezés
  - Főoldal megtekintése
* Bejelentkezett felhasználó:
  - Tanuló:
    - Órarend
    - Saját felhasználói adatok módosítása
    - Számlakiegyenlítés
    - Vizsgára jelentkezés
  - Oktató:
    - Órarend
    - Saját felhasználói adatok módosítása
    - Tanulók listája
    - Egy adott tanuló előrehaladásának megtekintése
    - Vizsgadíjak és Óradíjak meghatározása
    - Vizsgaidőpontok rögzítése
  - Vizsgabiztos:
    - Órarend
    - Saját felhasználói adatok módosítása
    - Vizsgadíj meghatározása
    - Vizsgaidőpontok létrehozása, kezelése
  - Admin:
    - Összes felhasználó listája
    - Felhasználók kezelése (törlés, adatok módosítása)
    - Felhasználók órarendjeinek módosítása
    - Díjszabások módosítása
    - Vizsgaidőpontok kezelése (törlés, módosítás)
    - Tanulók előrehaladásának módosítása


## 6. Fizikai környezet
### Hardver környezet
Bármely eszközön lévő böngésző amely meg tudja jeleníteni az oldalt legyen az számítógép, laptop vagy mobiltelefon.
### Fizikai alrendszerek
Az oldal egy lokális, helyi adatbázis szervert használ az adatok tárolására és megjelenítésére. 

### Fejlesztői eszközök
- Visual Studio Code.
- Postman


## 7. Architechtúrális terv

### Webszerver
Az alkalmazás webszervere Express.js alapú, amely a Node.js keretrendszeren fut. Az Express.js szerver kezeli a backend API-kat, és kapcsolatot tart a Prisma ORM segítségével a MySQL adatbázissal.

### Adatbázis rendszer
Az alkalmazás MySQL adatbázist használ, amelyhez az Express.js Prisma ORM-en keresztül csatlakozik.

### A program elérése, kezelése
* A program működéséhez szükséges technológiák:
  - Frontend: React.js (JavaScript alapú)
  - Backend: Express.js (Node.js környezetben) + Prisma ORM
  - Adatbázis kapcsolat: MySQL (Prisma ORM használatával)

### Fejlesztési és helyi futtatási környezet
* Fejlesztési környezet:
  - A fejlesztéshez egy helyi Node.js környezetet használunk, amely lehetővé teszi mind az Express.js alapú backend, mind a React frontend futtatását. Az adatbázis kezelésére Prisma ORM-et használunk.
* MySQL helyi futtatás:
  - MySQL adatbázis lokálisan fut XAMPP segítségével, ahol a MySQL adatbázis és a Node.js szolgáltatások együttműködnek.

### Éles környezet
  Az éles környezethez egy szervergépre van szükség, ahol a következő technológiák megfelelően konfigurálva vannak:
  - Node.js és Express.js: Ez a webszerver, amely kiszolgálja a backend kéréseket, adatokat olvas és ír a MySQL adatbázisból, illetve kapcsolatban áll a React frontenddel.
  - Prisma ORM: A Prisma ORM segítségével az Express.js backend hatékonyan tud kapcsolódni és műveleteket végrehajtani a MySQL adatbázison.
  - React.js: A frontend kód megfelelő megjelenítése.
  - MySQL adatbázis: A MySQL adatbázis a szervergépen fut, és a Prisma ORM ezen keresztül kommunikál az Express.js-szel.

## 8. Adatbázis terv
![Adatbázis](./img/adatbazis.png)

## 9. Implementációs terv

* Felhasználói felület: Webes alkalmazás
* A felhasználói felületet React.js segítségével építjük fel. Az adatokat Express.js-en keresztül kezeljük. Az Express.js backendben a Prisma ORM-et használjuk a MySQL adatbázissal való interakciókhoz (lekérdezések, beszúrások, módosítások, törlések). A felhasználók által beküldött adatokat feldolgozzuk, validáljuk, majd tároljuk a MySQL adatbázisban.

## 11. Telepítési terv

### Fizikai telepítési terv
  * A felhasználónak szüksége van egy internetelérésre alkalmas eszközzel, amely rendelkezik egy modern böngészővel (pl. Chrome, Firefox, Edge, Safari... stb.)
  * Távoli webszerver: Az alkalmazás egy távoli szerveren fut, amelyen a következő elemeket kell telepíteni és konfigurálni:
    - Node.js
    - MySQL
    - Prisma ORM
  * A szervernek folyamatosan csatlakoznia kell az internethez, hogy a felhasználók bármikor hozzáférhessenek az alkalmazáshoz.

### Szoftver telepítési terv
* Távoli webszerver esetén nem kell külön telepíteni a felhasználók eszközeire, mivel ez egy webes alkalmazás, amely böngészőben futtatható.
* Fejlesztési és helyi környezetben a következő eszközökre van szükség:
  - Node.js: A React és Express.js projektek futtatásához szükséges.
  - XAMPP: tartalmazza a MySQL adatbázist
  - Visual Studio Code: Backend és Frontend fejlesztéshez
  - Prisma ORM: az adatbázis kezeléséhez
* Miután az összes szükséges komponenst teleptették és konfigurálták, a webes alkalmazás böngészőn keresztül elérhető.

## 12. Karbantartási terv
Miután eljuttatjuk az alkalmazást a megrendelőnek, a fejlesztés nem ér véget, mivel egy jó szoftver életciklusa folyamatosan tart. Mindig felmerülhetnek új funkciók és igények, amelyeket érdemes figyelembe venni. A szoftver karbantartása és frissítése elengedhetetlen ahhoz, hogy lépést tartsunk a felhasználói elvárásokkal és a piaci trendekkel, biztosítva ezzel a termék hosszú távú sikerét.