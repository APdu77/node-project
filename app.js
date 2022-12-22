const esprex = require('./core/esprex')
const app = esprex();

app.get('/', (req, res) => {
    res.end('Home Page');
});

app.get('/contact', (req, res) => {
    res.end('Contact Page');
});




module.exports = app;