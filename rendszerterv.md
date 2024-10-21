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

### 3.2 Üzleti folyamatok
Az oldal meglátogatása után a felhasználó megtekintheti a főoldalt, ahol hasznos információkat talál a weboldalról és annak használatáról. Ezen felül regisztrálhat és bejelentkezhet az oldalra, regisztrációnál 3 féle szerepkör közül választhat: tanuló, oktató és vizsgabiztos. Bejelentkezés után a szerepkörhöz megfelelő funkciók lesznek elérhetők. Az összes szerepkörnek elérhető egy órarend és a saját felhasználói adatainak módosítása. Tanulóként elérhető még egy számlakiegyenlítés és egy vizsgára jelentkezés menüpont. Oktatóként megtekinthető a saját tanulók listája, vizsgadíjak, óradíjak rögzítése, tanuló előrehaladásának megtekintése valamint a vizsga időpontok rögzítése a tanuló számára. Vizsgabiztosként pedig vizsgadíj és vizsgaidőpont rögzíthető.

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

## 7. Architechtúrális terv

## 12. Karbantartási terv
