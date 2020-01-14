import express from 'express';

const port = 3001;
const app = express();

app.use('/foo', express.static('dist'));
app.get('/', express.static('dist'));

app.get('/foo-app', (req, res) => {
    res.send(`
        <p>This is foo-team!</p>
        <bar-item>
            <!--#include virtual="/bar-item" -->
        </bar-item>
    `);
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
