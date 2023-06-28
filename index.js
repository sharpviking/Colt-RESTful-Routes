const express = require("express");

const app = express();

const path = require('path');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: "Todd",
        comment: 'lol that is so funny!'
    },
    {
        username: "Tyler",
        comment: 'I would like to go birdwatching with my dog!'
    },
    {
        username: "Razor",
        comment: 'plz delete your account!'
    },
    {
        username: 'doga',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})



app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {

    const { meat, qty } = req.body;
    res.send('OK, here are your ${qty} ${mrat} tacos')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})