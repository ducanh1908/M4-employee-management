const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

app.set('view engine', 'ejs');
app.set('views','views');


app.get('/',(req, res)=>{
    res.render('user/register')
});

const arrayUser =[];
app.post('/user/register', upload.none(), (req, res)=>{
    if(req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        arrayUser.push(user);
        console.log(arrayUser);
        res.render("user/success", {user: user});
    }
    else {
        res.render("user/error")
    }

})



app.listen(port, ()=>{
    console.log(`Connect success listening port ${port}`);
})