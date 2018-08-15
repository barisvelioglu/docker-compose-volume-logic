const express = require('express')
const app = express()
const fs = require('fs');

app.get('/', (req, res) => {

fs.appendFile("./test/blabla.txt", "Hey there! 2", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

fs.appendFile("./test/blabla2.txt", "Hey there! 2", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    res.send('hello world');
}); 

})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
