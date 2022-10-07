import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

AppDataSource.initialize()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`)
  })
})