import express from 'express';

const port = 3002;
const app = express();

app.use('/bar', express.static('dist'));

app.get('/bar-item', (req, res) => {
    res.send('<div class="sth">BarItem: Nice item from SSR</div>');
});

app.get('/bar-ads', (req, res) => {
    res.send();
});

app.get('/bar-basket', (req, res) => {
    res.send();
});

app.get('/bar-buy', (req, res) => {
    res.send();
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
