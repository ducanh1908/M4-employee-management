const express = require('express');
const path = require('path');
const multer = require('multer');

const port = 3000;
const app = express();

const upload = multer();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.get('', (req, res)=>{
    res.render('blog');
});
let arrBlog = [
    {
        title: "Kịch bản sốc Man City - Liverpool",
        content: "Man City và Liverpool có thể phải phân định ngôi vương bằng trận play-off."
      },
      {
        title: "Mbappe bất ngờ xuất hiện ở Madrid",
        content: "Kylian Mbappe vừa có động thái khiến truyền thông phải bất ngờ khi xuất hiện ở thủ đô Madrid của Tây Ban Nha."
      },
];
app.post('/home', upload.none(), (req, res)=>{
    if(req.body.title&& req.body.content){
        let blog = {
            title: req.body.title,
            content: req.body.content
        }
        arrBlog.push(blog);
        console.log(arrBlog);
        res.render('home',{blog: arrBlog});
    }
    else {
        res.render('error');
    }
})



app.listen(port,()=>{
    console.log(`server is running port ${port}`);
})