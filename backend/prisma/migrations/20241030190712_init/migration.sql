/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Felhasznalok` (
    `felhasznalo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vezeteknev` VARCHAR(50) NOT NULL,
    `keresztnev` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `jelszo` VARCHAR(255) NOT NULL,
    `bankszamla` VARCHAR(24) NOT NULL,
    `jogkor_id` INTEGER NOT NULL,

    UNIQUE INDEX `Felhasznalok_email_key`(`email`),
    PRIMARY KEY (`felhasznalo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jogkorok` (
    `jogkor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `jogkor` INTEGER NOT NULL,

    PRIMARY KEY (`jogkor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kifizetesek` (
    `kifizetes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `elorehaladas_id` INTEGER NOT NULL,
    `targy` VARCHAR(50) NOT NULL,
    `osszeg` INTEGER NOT NULL,
    `kifizetve` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`kifizetes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orak` (
    `ora_id` INTEGER NOT NULL AUTO_INCREMENT,
    `idopont_eleje` DATETIME(3) NOT NULL,
    `idopont_vege` DATETIME(3) NOT NULL,
    `cim` VARCHAR(100) NULL,
    `helyszin` VARCHAR(100) NULL,

    PRIMARY KEY (`ora_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orarend` (
    `orarend_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ora_id` INTEGER NOT NULL,
    `felhasznalo_id` INTEGER NOT NULL,

    PRIMARY KEY (`orarend_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TanuloElorehaladas` (
    `elorehaladas_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanulo_id` INTEGER NOT NULL,
    `oktato_id` INTEGER NOT NULL,
    `levezetett_orak` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`elorehaladas_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vizsgajelentkezes` (
    `vizsgajelentkezes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanulo_elorehaladas_id` INTEGER NOT NULL,
    `vizsga_id` INTEGER NOT NULL,
    `oktato_jovahagyas` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`vizsgajelentkezes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vizsgak` (
    `vizsga_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vizsgabiztos_id` INTEGER NULL,
    `vizsga_datuma` DATETIME(3) NOT NULL,
    `tipus_id` INTEGER NOT NULL,
    `sikeres` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`vizsga_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VizsgaTipus` (
    `vizsga_tipus_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipus` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`vizsga_tipus_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Felhasznalok` ADD CONSTRAINT `Felhasznalok_jogkor_id_fkey` FOREIGN KEY (`jogkor_id`) REFERENCES `Jogkorok`(`jogkor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kifizetesek` ADD CONSTRAINT `Kifizetesek_elorehaladas_id_fkey` FOREIGN KEY (`elorehaladas_id`) REFERENCES `TanuloElorehaladas`(`elorehaladas_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orarend` ADD CONSTRAINT `Orarend_felhasznalo_id_fkey` FOREIGN KEY (`felhasznalo_id`) REFERENCES `Felhasznalok`(`felhasznalo_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orarend` ADD CONSTRAINT `Orarend_ora_id_fkey` FOREIGN KEY (`ora_id`) REFERENCES `Orak`(`ora_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TanuloElorehaladas` ADD CONSTRAINT `TanuloElorehaladas_tanulo_id_fkey` FOREIGN KEY (`tanulo_id`) REFERENCES `Felhasznalok`(`felhasznalo_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TanuloElorehaladas` ADD CONSTRAINT `TanuloElorehaladas_oktato_id_fkey` FOREIGN KEY (`oktato_id`) REFERENCES `Felhasznalok`(`felhasznalo_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vizsgajelentkezes` ADD CONSTRAINT `Vizsgajelentkezes_tanulo_elorehaladas_id_fkey` FOREIGN KEY (`tanulo_elorehaladas_id`) REFERENCES `TanuloElorehaladas`(`elorehaladas_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vizsgajelentkezes` ADD CONSTRAINT `Vizsgajelentkezes_vizsga_id_fkey` FOREIGN KEY (`vizsga_id`) REFERENCES `Vizsgak`(`vizsga_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vizsgak` ADD CONSTRAINT `Vizsgak_vizsgabiztos_id_fkey` FOREIGN KEY (`vizsgabiztos_id`) REFERENCES `Felhasznalok`(`felhasznalo_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vizsgak` ADD CONSTRAINT `Vizsgak_tipus_id_fkey` FOREIGN KEY (`tipus_id`) REFERENCES `VizsgaTipus`(`vizsga_tipus_id`) ON DELETE CASCADE ON UPDATE CASCADE;
