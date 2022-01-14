const express = require('express');
const path = require('path');
var url = require('url');
const app = express();
const port = 3000;

// Set EJS as a Web Templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Oxonio | Shaping The Future',
        exampleMessage: 'Site is under construction'
    });
});


// Set 404 Error page
app.get('*',(req, res, next) => {
    res.status(404).render('404');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server booming at http://localhost:${port}`);
});