#!/usr/bin/env node

// Imports
var LineStream = require('linestream'),
    argv = require('optimist').argv;

// Print only parts where something matches
function checkAndPrintData(data) {
    if (data.indexOf(argv._[0]) !== -1) {
        console.log(data);
    }
}

// Read stdin line-by-line
var lines = new LineStream(process.stdin);

// Collect the data
var collectedData = "";
lines.on('data', function (data) {
    if (data === "\n") {
        checkAndPrintData(collectedData);
        collectedData = "";
    } else {
        // Stitch together long lines.
        if (data[0] === " ") {
            collectedData = collectedData.substr(0, collectedData.length - 1) + data.substr(1, data.length);
        } else {
            collectedData += data;
        }
    }
});

lines.on('end', function () {
    checkAndPrintData(collectedData);
});

// Start stdin (pause()'d by default)
process.stdin.setEncoding('utf-8');
process.stdin.resume();
