const express = require('express');
const app = express();
    
    app.get('/', (req, res) => {
      res.sendFile('index.html');
    });
    
    app.use(express.static(__dirname + '/views')); // html
    app.use(express.static(__dirname + '/public')); // js, css, images
    
app.listen(8080, function(){
  // console.log(watson)
  console.log('listening on localhost..8080');
  
});