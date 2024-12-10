# Tesztjegyzőkönyv
## Tesztelő: Szkleván Richárd
## Utolsó módosítás: 2024. 12. 10.

Operációs rendszer: Windows 10

Böngészők: Opera GX

Ebben a dokumentumban lesz felsorolva az elvégzett tesztek elvárásai és eredményei. (Alfa, Béta és Végleges verzió)

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Főoldalak | 2024.11.05. | A jogosultságnak megfelelő főoldal megjelenése. | A felhasználók jogosultágának alapján a megfelelő főoldal jelent meg. | Hibát nem találtam |
| Órafelvitel | 2024.11.05. | Oktató órákat tud felvinni | Nem volt megfelelő tanuló, akinek órát lehetett felvinni. | Hibát találtam |
| Órarend | 2024.11.05. | Felvitt órák megjelenítése | A kártyákon nem jelent meg a név, az időpont nem megfelelő formátumban volt és kinézetet tekintve egymásba csúsztak a kártyák. | Hibát találtam |
| Felhasználók listázása | 2024.11.05. | Az admin jogosultsággal rendelkezők számára kilistázzuk a felhasználókat | Végtelen ciklusban futott a kilistázás | Hibát találtam |
| Jogosultság változtatás | 2024.11.05. | A felhasználóknak változtatni tudja az admin a jogosultságot. | Megváltoztatás után visszadob az oldal a főoldalra | Hibát nem találtam |

Az alfa tesztelés során a funkciók fele arányban megfelelően működtek, azonban voltak hiányzó adatok, ami a további teszteknél javítva lesz.

A következő tesztelés során a többi funkció kerül vizsgálatra, tesztelésre.

## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Órafelvitel | 2024.11.24. | Oktató órákat tud felvinni | Megjelentek a tanulók, akiknek órát tud felvinni egy adott oktató. | Hibát nem találtam |
| Órarend | 2024.11.24. | Felvitt órák megjelenítése | Minden fontos adat megjelenik a kártyákon (név, időpont) és teljesen elkülönülve jelennek meg a kártyák. | Hibát nem találtam |
| Felhasználók listázása | 2024.11.24. | Az admin jogosultsággal rendelkezők számára kilistázzuk a felhasználókat | A kiírás csak egyszer fut le, így nem terheli le az oldalt. | Hibát nem találtam |
| Navigációs sáv | 2024.11.24. | A menüpontokon kattintva az adott oldalra átirányít | A megfelelő oldalakra irányít át | Hibát nem találtam |
| Adott tanulók kilistázása | 2024.11.24. | Az oktató tanulóinak kilistázása | Táblázatszerűen kilistázzuk egy adott oktató tanulóit. | Hibát nem találtam |
| Óra műveletek | 2024.11.24. | Felvitt órák módosítása vagy törlése | Az időpontot nem engedte módosítani, törlést követően nem frissült az órarend. A törölt óra megjelenítve maradt | Hibát találtam |
| Óra műveletek | 2024.11.24. | Felvitt órák megjelenítése | Végtelenszer futott le a metódus, ami megjeleníti az órákat | Hibát találtam |
| Felhasználó műveletek | 2024.11.24. | Felhasználó törlése | Logikai törlést hajtunk végre. | Hibát nem találtam |
| Backend Jogosultság lekérés | 2024.11.24. | A felhasználó adait között lekérjük a jogosultságát. | A backend lekérés nem tartalmazta a jogosultság nevét, csak a kódját. | Hibát találtam |
| Backend Jogosultság változtatás | 2024.11.24. | Megfelelően kezeli a különböző hibákat a lekérdezés | Egyes hibaesetekkor nem küldte vissza a hibaüzenetet a backend, hanem leállt. | Hibát találtam |
| Backend Óra műveletek | 2024.11.24. | A backendben megírt óra műveletek megfelelő kezelése | Több helyen is elírást találtam a kódban. | Hibát találtam |

Az Alfa tesztben hibásan működő órafelvitel, órarend és felhasználó kilistázása prioritást élvezett, így már javításra került a béta tesztelésre.

A Béta tesztelést követően voltak még hibásan működő kódrészletek. Ezeket igyekeztünk kijavítani.

A végleges tesztelésnél prioritást élvez a Béta teszt során még hibásnak titulált elemek, majd újra ellenőrzésre kerül az összes eddigi ellenőrzött funkció.

## Végleges teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Főoldalak | 2024.12.10. | A jogosultságnak megfelelő főoldal megjelenése. | A felhasználók jogosultágának alapján a megfelelő főoldal jelent meg. | Hibát nem találtam |
| Órafelvitel | 2024.12.10. | Oktató órákat tud felvinni | Megjelentek a tanulók, akiknek órát tud felvinni egy adott oktató. | Hibát nem találtam |
| Órarend | 2024.12.10. | Felvitt órák megjelenítése | Minden fontos adat megjelenik a kártyákon (név, időpont) és teljesen elkülönülve jelennek meg a kártyák. | Hibát nem találtam |
| Felhasználók listázása | 2024.12.10. | Az admin jogosultsággal rendelkezők számára kilistázzuk a felhasználókat | A kiírás csak egyszer fut le, így nem terheli le az oldalt. | Hibát nem találtam |
| Navigációs sáv | 2024.12.10. | A menüpontokon kattintva az adott oldalra átirányít | A megfelelő oldalakra irányít át | Hibát nem találtam |
| Adott tanulók kilistázása | 2024.12.10. | Az oktató tanulóinak kilistázása | Táblázatszerűen kilistázzuk egy adott oktató tanulóit. | Hibát nem találtam |
| Óra műveletek | 2024.12.10. | Felvitt órák módosítása vagy törlése | Az időpontot engedte módosítani, törlést követően frissült az órarend. A törölt óra rövid időn belül eltűnik a felületről. | Hibát nem találtam |
| Óra műveletek | 2024.12.10. | Felvitt órák megjelenítése | Egyszer fut le a metódus, ami megjeleníti az órákat. Így nem terheli le az oldalt. | Hibát nem találtam |
| Felhasználó műveletek | 2024.12.10. | Felhasználó törlése | Logikai törlést hajtunk végre. | Hibát nem találtam |
| Backend Jogosultság lekérés | 2024.12.10. | A felhasználó adait között lekérjük a jogosultságát. | A backend lekérés mostmár tartalmazza a jogosultság nevét is. | Hibát nem találtam |
| Backend Jogosultság változtatás | 2024.12.10. | Megfelelően kezeli a különböző hibákat a lekérdezés | Egyes hibaesetekkor visszaküldi a backend a frontend számára a hibaüzenetet anélkül, hogy leállna | Hibát nem találtam |
| Backend Óra műveletek | 2024.12.10. | A backendben megírt óra műveletek megfelelő kezelése | A kód nagyrészében található elírások javítva lettek. | Hibát nem találtam |
| Hibaüzenetek kiírása | 2024.12.10. | Információt adó felugró ablakok megjelenése | A bejelentkezésnél, regisztrációnal, órafelvitelnél, módosításnál és törlésnél megjelenik egy kis üzenet ha sikeresen végrehajtódott és akkor is ha hibára futott az oldal. Szintén megjelennek ilyen üzenetek, amikor a felhasználó adatait módosítjuk. | Hibát nem találtam |

A Béta tesztben hibásan működő óra műveleteket, és backend hibás kódrészleteit javítottuk ki elsőként.

A végleges teszt lezajlott, kritikus hibák nincsenek többé az oldalon. Igény esetén a megrendelő kérhet további finomítást az oldalon.

Befejezve: 2024.12.10
