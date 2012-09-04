#!/usr/bin/env node

// Imports
var LineStream = require('linestream'),
    argv = require('optimist').argv;

// Print only parts where something matches
function checkAndPrintData(data) {
	var rawData = data.join("");
    // De-serialize base64 - doesn't take all hits, but close enough for our immediate uses.
    rawData = rawData.replace(/(\w+):: (.{0,1024})/g, function (str, key, base64) {
        return key + ": " + new Buffer(base64, 'base64').toString();
    }, "g");

    // Check if the value we're looking for is there
    if (rawData.indexOf(argv._[0]) !== -1) {
        console.log(data.join("\n"));
    }
}

// Read stdin line-by-line
var lines = new LineStream(process.stdin);

// Collect the data
var collectedData = [];
lines.on('data', function (data) {
    if (data === "\n") {
        checkAndPrintData(collectedData);
        collectedData = [];
    } else {
		collectedData.push(data);
    }
});

lines.on('end', function () {
    checkAndPrintData(collectedData);
});

// Start stdin (pause()'d by default)
process.stdin.setEncoding('utf-8');
process.stdin.resume();

// ex: filetype=javascript
