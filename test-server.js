const express = require('express')
const app = express();
app.set('view engine' , 'ejs')
app.set('views', 'test-view')
app.get('/', function(req, res){
    res.send("Hello Home page")
})
app.get('/api/forcast', function(req, res){
    res.send('Weather Forcast result')
})
app.get('/api/coordinate', function(req, res){
    // res.send('Weather Forcast from coordinate')
    res.render('test-template', {data: 'Hello Weather Forcast'})
})
app.get('/api/city', function(req, res){
    res.send('<h2>Weather Forcast from city</h2>')
})
const port = process.env.port || 3000
app.listen(port, function(){
    console.log('listen on port :', port)
})