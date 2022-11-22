import express from 'express';
import productsRoute from './route/products.router';

const app = express();

app.use(express.json());

// Exercicios:
/* const usersRoute = require('./route/users');
const ordersRoute = require('./route/orders');
const loginRoute = require('./route/login'); */

app.use('/products', productsRoute);
/* app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', loginRoute); */

export default app;
