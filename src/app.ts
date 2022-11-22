import express from 'express';
import productsRoute from './route/products.router';
import usersRoute from './route/users.router';

const app = express();

app.use(express.json());

// Exercicios:
/*
const ordersRoute = require('./route/orders');
const loginRoute = require('./route/login'); */

app.use('/products', productsRoute);
app.use('/users', usersRoute);
/* app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', loginRoute); */

export default app;
