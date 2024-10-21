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

## 12. Karbantartási terv
