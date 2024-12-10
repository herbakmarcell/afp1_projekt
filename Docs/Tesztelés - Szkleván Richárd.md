# Tesztjegyzőkönyv
## Tesztelő: Szkleván Richárd
## Utolsó módosítás: 2024. 12. 10.

Operációs rendszer: Windows 10

Böngészők: Opera GX

Ebben a dokumentumban lesz felsorolva az elvégzett tesztek elvárásai és eredményei. (Alfa, Béta és Végleges verzió)

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Főoldalak | 2024.11.14. | A jogosultságnak megfelelő főoldal megjelenése. | A felhasználók jogosultágának alapján a megfelelő főoldal jelent meg. | Hibát nem találtam |
| Órafelvitel | 2024.11.14. | Oktató órákat tud felvinni | Nem volt megfelelő tanuló, akinek órát lehetett felvinni. | Hibát találtam |
| Órarend | 2024.11.14. | Felvitt órák megjelenítése | A kártyákon nem jelent meg a név, az időpont nem megfelelő formátumban volt és kinézetet tekintve egymásba csúsztak a kártyák. | Hibát találtam |
| Felhasználók listázása | 2024.11.14. | Az admin jogosultsággal rendelkezők számára kilistázzuk a felhasználókat | Végtelen ciklusban futott a kilistázás | Hibát találtam |
| Jogosultság változtatás | 2024.11.14. | A felhasználóknak változtatni tudja az admin a jogosultságot. | Megváltoztatás után visszadob az oldal a főoldalra | Hibát nem találtam |

Az alfa tesztelés során a funkciók fele arányban megfelelően működtek, azonban voltak hiányzó adatok, ami a további teszteknél javítva lesz.

A következő tesztelés során a többi funkció kerül vizsgálatra, tesztelésre.

## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Órafelvitel | 2024.12.09. | Oktató órákat tud felvinni | Megjelentek a tanulók, akiknek órát tud felvinni egy adott oktató. | Hibát nem találtam |
| Órarend | 2024.12.09. | Felvitt órák megjelenítése | Minden fontos adat megjelenik a kártyákon (név, időpont) és teljesen elkülönülve jelennek meg a kártyák. | Hibát nem találtam |
| Felhasználók listázása | 2024.12.09. | Az admin jogosultsággal rendelkezők számára kilistázzuk a felhasználókat | A kiírás csak egyszer fut le, így nem terheli le az oldalt. | Hibát nem találtam |
| Navigációs sáv | 2024.12.09. | A menüpontokon kattintva az adott oldalra átirányít | A megfelelő oldalakra irányít át | Hibát nem találtam |
| Adott tanulók kilistázása | 2024.12.09. | Az oktató tanulóinak kilistázása | Táblázatszerűen kilistázzuk egy adott oktató tanulóit. | Hibát nem találtam |
| Óra műveletek | 2024.12.09. | Felvitt órák módosítása vagy törlése | Az időpontot nem engedte módosítani, törlést követően nem frissült az órarend. A törölt óra megjelenítve maradt | Hibát találtam |
| Felhasználó műveletek | 2024.12.09. | Felhasználó törlése | Logikai törlést hajtunk végre. | Hibát nem találtam |




Befejezve: 2024.12.10
