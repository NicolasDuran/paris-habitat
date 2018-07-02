
var appRouter = function (app) {
function getRandomFloat(min, max) {
  console.log('test');
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  console.log('test 1');
  return Math.floor(Math.random() * (max - min + 1) + min);
}
    app.get("/", function(req, res) {
  console.log('test');
        res.json({
                routes: [
                    "/api/graph1",
                    "/api/graph2",
                ]
            });
    });

    app.get("/api/:graph", function(req, res) {
        const json = require('../data/' + req.params.graph + '.json');
        res.json(json);
    });

    app.get('/api/graph1/rt', function(req, res) {
  console.log('test 2');
        res.json(getRandomInt(5, 10));
    });

    app.get('/api/graph2/rt', function(req, res) {
  console.log('test 3');
        res.json(getRandomInt(2, 18));
    });
};


module.exports = appRouter;
