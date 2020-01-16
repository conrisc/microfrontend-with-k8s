import express from 'express';

import { render } from './page/render.js';

const port = 3001;
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/foo', express.static('dist'));

app.get('/:color?', (req, res) => {
    const { color } = req.params;
    const html = render(color);
    res.render('layout', { html });
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
