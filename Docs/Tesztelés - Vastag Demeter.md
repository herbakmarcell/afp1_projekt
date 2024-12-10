# Tesztjegyzőkönyv

## Tesztelő: Vastag Demeter

## Utolsó módosítás: 2023. 12. 10.

Operációs rendszer: Windows 11, Linux Mint

Böngészők: Google Chrome, Mozilla Firefox

Ebben a dokumentumban lesznek felsorolva az elvégzett tesztek elvárásai, valamint az eredményei. (Alfa, Béta, Végleges teszt)

## Alfa teszt

|   Vizsgálat   | Tesztelés Időpontja |                      Elvárás                      |                                     Eredmény                                     |        Hibák        |
| :-----------: | :-----------------: | :-----------------------------------------------: | :------------------------------------------------------------------------------: | :-----------------: |
|   Adatbázis   |     2024.11.05      |                Adatbázis működése                 |             Az adatbázis működik, sikeresen lehet hozzá csatlakozni.             | Nem találtam hibát. |
| Regisztráció  |     2024.11.05      |           Új felhasználó regisztrálása            |                    Sikeresen tud új felhasználó regisztrálni.                    | Nem találtam hibát. |
| Bejelentkezés |     2024.11.05      |         Bejelentkezés a helyes adatokkal          |          A felhasználó sikeresen be tud jelentkezni a létező adatokkal.          | Nem találtam hibát. |
| Kijelentkezés |     2024.11.05      |          Kijelentkezés a felhasználóból           |       Sikeresen ki lehet jelentkezni, valamint a JWT Token törlésre kerül.       | Nem találtam hibát. |
| Autentikáció  |     2024.11.05      | A felhasználó bejelentkezésnél kap egy JWT Tokent |            A Token rendelése a felhasználóhoz sikeresen megtörténik.             | Nem találtam hibát. |
|    Órarend    |     2024.11.05      |                 Órák lekérdezése                  |   Az órákat le lehet kérdezni, valamint csak a felhasználó óráit adja vissza.    | Nem találtam hibát. |
|    Órarend    |     2024.11.05      |                Új óra létrehozása                 | A megfelelő adatok megadásával sikeresen fel lehet vinni az órát az adatbázisba. | Nem találtam hibát. |

A funkciók a helyes adatok megadásával megfelelően működtek. Hibás adatokat azonban még nem tudnak kezelni a funkciók, ezek később lesznek javítva.
A következő tesztelés során a meglévő, valamint a további funkciók kerülnek vizsgálatra, tesztelésre.

## Béta teszt

|      Vizsgálat      | Tesztelés Időpontja |                   Elvárás                    |                                                                                          Eredmény                                                                                           |        Hibák        |
| :-----------------: | :-----------------: | :------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------: |
|    Regisztráció     |     2024.11.24      |              Adatok ellenőrzése              |                                                    Nem lehet már létező email címre regisztrálni, valamint minden adatot meg kell adni.                                                     | Nem találtam hibát. |
|    Bejelentkezés    |     2024.11.24      |              Adatok ellenőrzése              |                                                                                Minden adatot meg kell adni.                                                                                 | Nem találtam hibát. |
|       Órarend       |     2024.11.24      |               Óra létrehozása                |                                   Minden adatot meg kell adni, valamint minden adatnak a megfelelő típusúnak kell lennie. Csak oktató hozhat létre órát.                                    | Nem találtam hibát. |
|       Órarend       |     2024.11.24      |                 Óra törlése                  |                                         Sikeresen lehet törölni, amennyiben létező órát akarunk törölni, valamint megfelelő típusú ID-t adunk meg.                                          | Nem találtam hibát. |
|       Órarend       |     2024.11.24      |                Óra módosítása                | A megadott ID és az opcionális adatok megadásával módosítja az órát. Ellenőrzi az adatokat, hogy csak megfelelő adatokkal dolgozzon. Csak oktató módosíthat órát, valamint csak a sajátját. | Nem találtam hibát. |
|       Órarend       |     2024.11.24      |                Következő óra                 |                                                                  Sikeresen le lehet kérni a felhasználó következő óráját.                                                                   | Nem találtam hibát. |
|       Jogkör        |     2024.11.24      |              Jogkör módosítása               |                                         A rendszergazda sikeresen tudja módosítani a felhasználók jogosultságait, kivéve egy másik rendszergazdáét.                                         | Nem találtam hibát. |
| Felhasználó törlése |     2024.11.24      | Felhasználó törlése a rendszerből ID alapján |                                                  A megadott ID alapján sikeresen lehet törölni az adatbázisból, ha létezik a felhasználó.                                                   | Nem találtam hibát. |
| Tanulók lekérdezése |     2024.11.24      |             Tanulók lekérdezése              |                                                                  Sikeresen le lehet kérdezni a tanulókat az adatbázisból.                                                                   | Nem találtam hibát. |

Az Alfa tesztben parciálisan működő funckiók prioritást élveztek, így azok javítva lettek a Béta tesztre. A Béta teszt elkészült, a letesztelt funkciók működnek, azonban van olyan funkció, ami még nem tudja teljesen kezelni a hibás adatokat. Ezek a Végleges tesztben prioritást élveznek majd és újra ellenőrzés alá kerülnek az eddig funkciók.

## Végleges Teszt

|       Vizsgálat        | Tesztelés Időpontja |              Elvárás               |                                                                Eredmény                                                                |           Hibák            |
| :--------------------: | :-----------------: | :--------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------: |
|       Adatbázis        |     2024.12.10      |    Adatbázis elérése, működése     |                                              Az adatbázis működik, a csatlakozás sikeres.                                              |    Nem találtam hibát.     |
|      Regisztráció      |     2024.12.10      |         Adatok ellenőrzése         | Az megfelelő adatok megadásával lehet regisztrálni, amennyiben nincs ilyen email cím a rendszerben, akkor is ha inaktív a felhasználó. |    Nem találtam hibát.     |
|     Bejelentkezés      |     2024.12.10      |         Adatok ellenőrzése         |                          A megfelelő adatok megadásával be lehet jelentkezni, amennyiben aktív a felhasználó.                          |    Nem találtam hibát.     |
|  Felhasználó lekérése  |     2024.12.10      |  A felhasználó adatainak lekérése  |                                            Sikeresen le lehet kérni a felhasználó adatait.                                             |    Nem találtam hibát.     |
|  Felhasználó törlése   |     2024.12.10      |     Aktív felhasználó törlése      |                A helyes és létező ID megadásával sikeresen deaktiválni lehet a megadott felhasználót, amennyiben aktív.                |    Nem találtam hibát.     |
| Felhasználó aktiválása |     2024.12.10      |   Inaktív felhasználó aktiválása   |                              Létező ID megadásával aktiválni lehet a felhasználót, amennyiben az inaktív.                              |    Nem találtam hibát.     |
|   Jogkör módosítása    |     2024.12.10      | Felhasználó jogkörének módosítása  |           A helyes és létező ID megadásával sikeresen lehet módosítani a felhasználó jogkörét, amennyiben nem rendszergazda.           |    Nem találtam hibát.     |
|     Kijelentkezés      |     2024.12.10      |   Felhasználó kijelentkeztetése    |                                    A felhasználó sikeresen kijelentkezik és törlésre kerül a Token.                                    |    Nem találtam hibát.     |
|        Órarend         |     2024.12.10      |          Órák lekérdezése          |                    Sikeresen megjelennek a felhasználó órái, valamint csak azok ahol a tanuló és a tanár is aktív.                     |    Nem találtam hibát.     |
|        Órarend         |     2024.12.10      |           Következő óra            |                Sikeresen megjelenik a következő óra, azonban akkor is megjelenik, amikor a tanár vagy a tanuló inaktív.                |      Hibát találtam.       |
|        Órarend         |     2024.12.10      |          Új óra felvétele          |                                          Sikeresen fel lehet új órát vinni létező tanulónak.                                           |    Nem találtam hibát.     |
|        Órarend         |     2024.12.10      |            Óra törlése             |                            Sikeresen lehet órát törölni, azonban nincs ellenőrizve, hogy a tanuló aktív-e.                             |      Hibát találtam.       |
|        Órarend         |     2024.12.10      |           Óra módosítása           |                                    Sikeresen lehet órát módosítani, valamint csak aktív tanulónak.                                     |    Nem találtam hibát.     |
|        Tanulók         |     2024.12.10      |        Tanulók lekérdezése         |                             Sikeresen le lehet kérdezni a tanulókat, azonban az inaktívak is megjelennek.                              |      Hibát találtam.       |
|        Frontend        |     2024.12.10      | Weboldal megjelenésének vizsgálata |                                        A Weboldal jól rendezett, átlátható, könnyen kezelhető.                                         |    Nem találtam hibát.     |
|        Backend         |     2024.12.10      |    A Backend kódjainak működése    |                               A Backend kódjai alapvetően működnek, néhány nem-kritikus hiba található.                                | Hibák részlegesen javítva. |

A Béta tesztben a hibakezelés volt a nagyobb prioritás, amik sikeresen javítva lettek, nincs kritikus hiba a funkciókban, a kritikus hibák kezelve vannak. Néhány funkció részlegesen működik, azonban nem okoznak kritikus hibát.
A Végleges tesztelés lezajlott, a kritikus hibákat sikerült kiküszöbölni, azonban vannak apró hibák a funkciókban. Igény esetén a megrendelő ezek javítását követelheti, amennyiben nem fogadja el a programot.

Befejezve: 2024.12.10
