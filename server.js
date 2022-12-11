const express = require('express');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {


    const data = fs.readdirSync('assets')
        .map(fn => {
            let r = { image: 'assets/' + fn, height: 2, width: 1};
            if (fn.startsWith('large_')) {
                r.width = 2;
            }
            return r;
        });

    const template = fs.readFileSync('template.html', {encoding:'utf8'});
    res.send(Handlebars.compile(template)(data));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});


