import express from 'express';
import morgan from 'morgan';
import {config} from 'dotenv';
import peliculasRouter from './routes/peliculas.routes.js';
config();
const app=express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/',peliculasRouter);

export default app;