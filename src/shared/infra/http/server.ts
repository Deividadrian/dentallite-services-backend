import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { AppDataSourse } from '@shared/infra/typeorm/data-sourse';

AppDataSourse.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`)
  })
})