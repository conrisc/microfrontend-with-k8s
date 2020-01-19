import express from 'express';
import { render as renderAds } from './bar-ads/render.js';
import { render as renderBasket } from './bar-basket/render.js';
import { render as renderBuy } from './bar-buy/render.js';

const port = 3002;
const app = express();

app.use('/bar', express.static('dist'));

app.get('/bar-item', (req, res) => {
    res.send('<div class="sth">BarItem: Nice item from SSR</div>');
});

app.get('/bar-ads', (req, res) => {
    res.send(renderAds());
});

app.get('/bar-basket', (req, res) => {
    res.send(renderBasket(0));
});

app.get('/bar-buy', (req, res) => {
    res.send(renderBuy(999999));
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
