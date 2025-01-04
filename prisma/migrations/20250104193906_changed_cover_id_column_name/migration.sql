/*
  Warnings:

  - You are about to drop the column `cover_id` on the `books` table. All the data in the column will be lost.
  - Added the required column `cover_url` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` DROP COLUMN `cover_id`,
    ADD COLUMN `cover_url` VARCHAR(191) NOT NULL;
