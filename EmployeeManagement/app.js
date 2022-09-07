const express = require('express');
const path = require('path');
const multer = require('multer');
const e = require('express');


const port = 3000;
const app = express();
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', 'views');

const employees = [
    {
        name: 'Duc Anh',
        department: 'Nhan Su'
    },
    {
        name: 'Thao Lee',
        department: 'Thu Ky'
    }
]
app.get('', (req, res)=>{
    res.render('show-employee',{data: employees});
});
app.get('/create',(req, res)=>{
    res.render('create');
})
app.get('/delete/:id',(req, res)=>{
        id = req.params.id;
        // console.log(id);
        employees.splice(id,1);
        res.redirect('/');
   
})
app.post('/show-employee', upload.none(), (req, res)=>{
    if(req.body.name && req.body.department){
        let employee = {
            name: req.body.name,
            department: req.body.department
        }
        employees.push(employee);
        res.render('show-employee', {data: employees})
    }
    else{
        res.render('error')
    }

})

app.listen(port, ()=>{
    console.log(`server is running port ${port}`);
})

