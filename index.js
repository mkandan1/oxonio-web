const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as a Web Templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Oxonio | Shaping The Future',
        exampleMessage: 'Site is under construction'
    });
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server booming at http://localhost:${port}`);
});