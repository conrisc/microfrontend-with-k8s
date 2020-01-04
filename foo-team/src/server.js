import express from 'express';

const port = 3001;
const app = express();

app.use('/foo', express.static('dist'));
app.get('/', express.static('dist'));

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
