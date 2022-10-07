import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665111709572 implements MigrationInterface {
    name = 'default1665111709572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" ("id" SERIAL NOT NULL, "name" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dentistry" ("id" SERIAL NOT NULL, "name" text NOT NULL, "college" text NOT NULL, "state" text NOT NULL, "city" text NOT NULL, "cellphone" text NOT NULL, CONSTRAINT "PK_bfd660ef876b995ae228e741bc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialty" ("id" SERIAL NOT NULL, "name" text NOT NULL, "treatments" text NOT NULL, CONSTRAINT "PK_9cf4ae334dc4a1ab1e08956460e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "specialty"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "dentistry"`);
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
