import express from 'express';

import { render } from './page/render.js';

const port = 3001;
const app = express();

app.use('/foo', express.static('dist'));
app.get('/', express.static('dist'));

app.get('/foo-app', (req, res) => {
    res.send(render());
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
