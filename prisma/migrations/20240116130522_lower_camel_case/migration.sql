/*
  Warnings:

  - You are about to drop the column `sub_category` on the `podcasts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `podcasts` DROP COLUMN `sub_category`,
    ADD COLUMN `subCategory` VARCHAR(191) NULL;
