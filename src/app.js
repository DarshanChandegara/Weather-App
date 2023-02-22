const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const path = require('path');
// console.log(path.join(__dirname ,'../public'));
const staticpath = path.join(__dirname ,'../public');
const template_path = path.join(__dirname,'../template/views');
const partial_path = path.join(__dirname,'../template/partials');

app.set('view engine' , 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);
app.use(express.static(staticpath));

app.get('', (req ,res) => {
    res.render("index");
})
 
app.get('/about', (req ,res) => {           
    res.render('about');
})

app.get('/weather', (req ,res) => {           
    res.render("weather");
}) 

app.get('*', (req ,res) => {           
    res.render("404", {
        errmsg :"OOPS! Page Not Found"
    });
})

app.listen(port , () => {
    console.log('Listening from port 8000');
});