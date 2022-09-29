import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './roots';
import AppError from '@shared/errors/AppErros';

const app = express();


app.use(cors());
app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statuscode).json({
      status: 'error',
      message: error.message,
    })
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(3000, () => {console.log('Server running port 3000!')});
