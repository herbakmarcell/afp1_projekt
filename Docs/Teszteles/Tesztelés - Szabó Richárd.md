# Tesztjegyzőkönyv
## Tesztelő: Szabó Richárd
## Utolsó módosítás: 2024. 12. 10.

Operációs rendszer: Windows 11

Böngészők: Google Chrome, Mozilla Firefox

Ebben a dokumentumban találhatók az elvégzett tesztek elvárásai és eredményei (Alfa, Béta és Végleges verzió).

## Alfa teszt

| Vizsgálat               | Tesztelés időpontja | Elvárás                                           | Eredmény                                                                 | Hibák            |
|-------------------------|---------------------|-------------------------------------------------|------------------------------------------------------------------------|------------------|
| Adatbázis              | 2024.11.05.        | Az adatbázis kapcsolatának és műveleteinek ellenőrzése. | Sikeresen kapcsolódunk az adatbázishoz, tudunk adatokat felvinni és lekérdezni is. A még fejlesztés alatt álló funkciók nem minden adatot képesek megfelelően kezelni. | Hibát találtam   |
| Bejelentkezés          | 2024.11.05.        | Bejelentkezés már meglévő fiókkal               | Sikeresen be tudtam jelentkezni az oldalra.                           | Nem találtam hibát |
| Regisztráció           | 2024.11.05.        | Regisztráció az oldalra                         | A mezők kitöltése után sikeresen tudtam regisztrálni az oldalra. Többször lehet regisztrálni ugyanazokkal az adatokkal. | Hibát találtam   |
| Saját profil oldal     | 2024.11.05.        | Saját adatok megjelennek                        | Sikeresen megjelennek a bejelentkezett felhasználó adatai.            | Nem találtam hibát |
| Saját adatok módosítása| 2024.11.05.        | Vezetéknév és keresztnév módosítható            | Tudjuk módosítani a vezetéknevet és keresztnevet is. A módosítások végrehajtódnak az adatbázisban és sikeresen megjelennek az oldalon. | Nem találtam hibát |
| Kijelentkezés          | 2024.11.05.        | Kijelentkezés a fiókból                         | A felhasználó ki tud jelentkezni.                                      | Nem találtam hibát |

Az alfa tesztelés során a funkciók rendeltetésszerű használat mellett megfelelően működtek. Egyedüli problémánk a regisztráció volt, de ezt a következő tesztelésre javítani fogjuk. Kiderült továbbá, hogy egy új adatbázistervre van szükségünk, ezért a következő tesztelés előtt létrehoztunk egy új adatbázist, amely már képes az oldal összes funkcióját megfelelően kezelni és tárolni az adatokat. A következő tesztelés során a többi funkció kerül vizsgálatra.

## Béta teszt

| Vizsgálat               | Tesztelés időpontja | Elvárás                                           | Eredmény                                                                 | Hibák            |
|-------------------------|---------------------|-------------------------------------------------|------------------------------------------------------------------------|------------------|
| Regisztráció           | 2024.11.24.        | Regisztráció az oldalra                         | Már ellenőrizzük, hogy az e-mail cím mindenképpen egyedi legyen. Ha nem az, akkor hibaüzenetet kap a felhasználó. | Nem találtam hibát |
| Navigációs sáv         | 2024.11.24.        | A menüpontokra kattintva az adott oldalra irányít | A megfelelő oldalakra irányít át.                                       | Nem találtam hibát |
| Órarend                | 2024.11.24.        | Megjelennek az órák az órarendben              | A felhasználóhoz tartozó órák sikeresen megjelennek.                   | Nem találtam hibát |
| Adatbázis              | 2024.11.24.        | A frissített adatbázis működése                 | A frissített adatbázis megfelelően működik, és minden adatot képes kezelni. | Nem találtam hibát |
| Oktató saját tanulói   | 2024.11.24.        | Megjelennek az oktató tanulói                  | Sikeresen megjelennek az adott oktatóhoz tartozó tanulók.              | Nem találtam hibát |
| Tanuló kifizetései     | 2024.11.24.        | Megjelennek a kifizetések                      | A tanulóhoz tartozó kifizetések sikeresen megjelennek.                 | Nem találtam hibát |
| Kifizetés végrehajtása | 2024.11.24.        | A kifizetés végrehajtódik                      | A tanuló be tudja fizetni a számláit.                                  | Nem találtam hibát |
| Szabad vizsgaalkalmak | 2024.11.24.        | A vizsgaalkalmak megjelennek egy listában      | A szabad vizsgaalkalmak sikeresen megjelennek, a foglaltakat nem jelenítjük meg. Kiderült, hogy meg kell jeleníteni azokat a vizsgákat is, amelyek jövőbeliek, és a bejelentkezett felhasználóhoz tartoznak. Ezek jelenleg nem láthatók. | Hibát találtam   |
| Tanuló előrehaladása   | 2024.11.24.        | A tanuló előrehaladásának adatai megjelennek   | Sikeresen megjelenik, hogy melyik oktatóhoz tartozik az adott tanuló, valamint a vizsgák sikeressége is. | Nem találtam hibát |
| Órák kiírása          | 2024.11.24.        | Az oktató órákat tud kiírni a tanulóinak        | Az oktató ki tudja írni az órákat, és a tanulónak megjelennek ezek.   | Nem találtam hibát |
| Frontend               | 2024.11.24.        | A weboldal megjelenésének vizsgálata           | A weboldal felépítése megfelelő és átlátható.                          | Nem találtam hibát |
| Backend                | 2024.11.24.        | A backendben megírt kódok működése             | A backend kódok mind megfelelően működnek.                             | Nem találtam hibát |

Az Alfa tesztben hibásan működő regisztráció javításra került a Béta tesztre.

A Béta teszt elkészült, és a tesztelt funkciók többsége megfelelően működött. Csak kisebb javításokra van szükség mind a Frontend, mind a Backend területen.

## Végleges teszt

| Vizsgálat               | Tesztelés időpontja | Elvárás                                           | Eredmény                                                                 | Hibák            |
|-------------------------|---------------------|-------------------------------------------------|------------------------------------------------------------------------|------------------|
| Szabad vizsgaalkalmak | 2024.12.10         | A vizsgaalkalmak megjelennek egy listában      | A szabad vizsgaalkalmak sikeresen megjelennek, a foglaltakat nem jelenítjük meg. Itt már megjelenítjük azokat a vizsgákat is, amelyek jövőbeliek és a bejelentkezett felhasználóhoz tartoznak. | Nem találtam hibát |
| Admin felület           | 2024.12.10         | Az adminisztrátor kezelheti a felhasználókat    | A felhasználók listája megjelenik, az adataik módosíthatók, valamint a jogkörük megváltoztatható. | Nem találtam hibát |
| Oktató választás       | 2024.12.10         | A tanuló kiválaszthatja az oktatóját           | Ki lehet választani az oktatót, és ezt követően már nem módosítható.    | Nem találtam hibát |
| Vizsga jelentkezés     | 2024.12.10         | A tanuló vizsgákra tud jelentkezni             | Sikeresen tud jelentkezni és lejelentkezni a vizsgákról.               | Nem találtam hibát |
| Felhasználó törlés      | 2024.12.10         | Az adott felhasználót logikai törléssel inaktiváljuk. | A törlés megfelelően működik, és inaktívvá teszi a felhasználót.       | Nem találtam hibát |

A Béta teszt során hiányosan megjelenő funkciók elsőbbséget élveztek, ezeket sikerült javítani és kiegészíteni.

A végleges teszt lezajlott. A hibák kijavításra kerültek, és a program funkciói megfelelően működnek, így egy teljes értékű programot adhatunk át a megrendelő számára.

Befejezve: 2024.12.10
