import express from 'express';
import cors from 'cors';
import messagesRoute from './route/messages.js';
import usersRoutes from './route/users.js';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use(cors({
    origin: 'https://localhost:3000',
    credentials: true,

}),
);


const routes = [...messagesRoute, ...usersRoutes]
routes.forEach(({ method, route, handler }) => {
    app[method](route, handler)
})

app.listen(8000, () => {
    console.log('server listening on 8000!')
})