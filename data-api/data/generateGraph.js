const fs = require('fs');

const filename = 'data/graph2.json';
const json = {data: []};

for (let i = 1527976144; i < 1530568218; i+=100) {
    json.data.push({
        timestamp: i,
        value: getRandomInt(2, 18)
    });
}

fs.writeFile(filename, JSON.stringify(json), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
