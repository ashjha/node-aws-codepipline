const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {page:'Home', menuId:'home'});
})
app.get('/health', (req, res) => res.status(200).send('Good!'))

app.use("*",(req,res)=>res.status(404).send('404 - Page not found'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))