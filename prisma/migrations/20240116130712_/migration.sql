/*
  Warnings:

  - You are about to drop the column `subCategory` on the `podcasts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `podcasts` DROP COLUMN `subCategory`,
    ADD COLUMN `sub_category` VARCHAR(191) NULL;
