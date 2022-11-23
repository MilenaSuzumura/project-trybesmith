import express from 'express';
import productsRoute from './route/products.router';
import usersRoute from './route/users.router';
import loginRoute from './route/login.router';
import ordersRoute from './route/orders.router';

const app = express();

app.use(express.json());

// Exercicios:
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/login', loginRoute);
app.use('/orders', ordersRoute);

export default app;
