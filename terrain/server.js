const express = require('express');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const FILE_PATTERN = /(?<width>\d+)_(?<height>\d+)_[^\.]+\.png/;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
    const data = fs.readdirSync('assets')
        .map(fn => {
            const match = fn.match(FILE_PATTERN);
            if (!match) return null;
            const { width, height } = match.groups;
            let r = { image: 'assets/' + fn, height, width };
            return r;
        })
        .filter(e => !!e);

    const template = fs.readFileSync('template.html', { encoding: 'utf8' });
    res.send(Handlebars.compile(template)(data));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});


