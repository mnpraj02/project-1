const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log("dfhhfh");
    res.json({hi : 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(5000);

