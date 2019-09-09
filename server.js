const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {page:'Home', menuId:'home'});
})

app.get('/about', function (req, res, next) {
    res.render('about', { page: 'About Us', menuId: 'about' });
});

app.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});

app.post('/vote', (req, res) => {
    console.log(req.body);


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hi.ashu143@gmail.com',
            pass: 'ashuashu@'
        }
    });

    var mailOptions = {
        from: 'hi.ashu143@gmail.com',
        to: 'ashutosh131991@gmail.com',
        subject: 'Murga!!!',
        text: JSON.stringify(req.body)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        res.render('index', {page:'Singing star', menuId:'home'});
    });
});

app.get('/health', (req, res) => res.status(200).send('Good!'))

app.use("*",(req,res)=>res.status(404).send('404 - Page not found'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))