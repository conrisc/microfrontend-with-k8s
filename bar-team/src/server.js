import express from 'express';

const port = 3002;
const app = express();

app.use('/bar', express.static('dist'));

app.listen(port, () => { console.log(`Server is running on port ${port}`) });