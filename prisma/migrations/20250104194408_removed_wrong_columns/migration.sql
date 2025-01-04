/*
  Warnings:

  - You are about to drop the column `categoryId` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_categoryId_fkey`;

-- DropIndex
DROP INDEX `books_categoryId_fkey` ON `books`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `categoryId`;
