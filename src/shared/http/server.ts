import express from 'express';
import cors from 'cors';
import router from './roots';

const app = express();


app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, () => {console.log('Server running port 3000!')});
