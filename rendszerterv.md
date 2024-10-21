## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek
* Scrum master:
  -   Herbák Marcell 
* Product owner:
  -   Herbák Marcell 
* Üzleti szereplő:
  -  Györkis Tamás

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

## 7. Architechtúrális terv

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
