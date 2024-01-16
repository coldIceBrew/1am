/*
  Warnings:

  - Made the column `producer` on table `podcasts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `podcasts` MODIFY `producer` VARCHAR(191) NOT NULL;
