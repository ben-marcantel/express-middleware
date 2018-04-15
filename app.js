const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const routes = require("./routes/");
require("doten").config();


app.get('/home', (req, res, next) => {
    next();
});
app.get('/see-our-chickens', (req, res, next) => {
    next();
});
app.get('/see-our-eggs', (req, res, next) => {
    next();
});


//middleware
app.use(express.static(__dirname + '/routes', { extensions: 'html' }));

app.use('/home', (req, res, next) => {
    res.sendFile('public/home.html', {
        root: __dirname
    });
});

app.use('/see-our-chickens', (req, res, next) => {
    res.sendFile('public/see-our-chickens.html', {
        root: __dirname
    });
});

//easter egg 
app.use('/see-our-eggs', (req, res, next) => {
    const time = new Date();



console.log(`
You found the Easter Egg at ${time}
     ,ggadddd8888888bbbbaaa,_ 
    ,ad888,      'Y88,      'Y888baa,
  ,dP"  "Y8b,      '"Y8b,      '"Y8888ba,
 ,88      "Y88b,      '"Y8ba,       '"Y88Ya,
,P88b,      '"Y88b,       '"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        '"Y8ba,_      'Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   '8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         '""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
'b,"Y88ba,         ""Y88baa,_         """Y888bd"
'b, '"Y88ba,_         ""Y888baa,_         ,8"
 '8,   '""Y88ba,_         '"""Y8888baaaaaP"
  'Ya,     '""Y888ba,_           '"d88P"
    '"Yb,,_     '""Y888baa,__,,adP""'
        '"""YYYY8888888PPPP"""'
        `);


    console.log();
    res.sendFile('routes/see-our-eggs.html', {
        root: __dirname
    });
});


// port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
