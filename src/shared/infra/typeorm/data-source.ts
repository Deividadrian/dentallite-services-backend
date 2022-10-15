import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../../../modules/users/infra/typeorm/entities/User';
import { Specialty } from '../../../modules/specialty/infra/typeorm/entities/Specialty';
import { Dentistry } from '../../../modules/dentistry/infra/typeorm/entities/Dentistry'
import { College } from './../../../modules/college/infra/typeorm/entities/College';

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
	host: process.env.DB_HOST,
  port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	entities: [
		User,
		Specialty,
		Dentistry,
		College,
	], /*
	entities: ['./src/modules/users/infra/typeorm/entities/*.{ts,js}']
	*/
	migrations: ['./src/shared/infra/typeorm/migration/*.{ts,js}']
})
