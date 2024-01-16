-- AlterTable
ALTER TABLE `podcasts` ADD COLUMN `explicit` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `producer` VARCHAR(191) NULL,
    ADD COLUMN `sub_category` VARCHAR(191) NULL;
