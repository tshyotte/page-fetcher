const http = require('http');
const fs = require('fs');

const url = process.argv.slice(2)[0]; // link to file you want to download
const path = process.argv.slice(2)[1]; // where to save a file

const request = http.get(url, function(response) {
    if (response.statusCode === 200) {
        let file = fs.createWriteStream(path);
        response.pipe(file);
    }
    request.setTimeout(60000, function() { // if after 60s 
        request.abort();
    });
});

