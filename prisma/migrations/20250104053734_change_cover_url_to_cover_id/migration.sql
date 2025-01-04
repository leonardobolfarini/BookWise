/*
  Warnings:

  - You are about to drop the column `cover_url` on the `books` table. All the data in the column will be lost.
  - The required column `cover_id` was added to the `books` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `books` DROP COLUMN `cover_url`,
    ADD COLUMN `cover_id` VARCHAR(191) NOT NULL;
