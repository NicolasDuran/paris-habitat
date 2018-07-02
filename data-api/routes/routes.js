var appRouter = function (app) {

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
    app.get("/", function(req, res) {
        res.json({
                routes: [
                    "/api/graph1",
                    "/api/graph2",
                    "/api/graph1/rt",
                    "/api/graph2/rt",
                ]
            });
    });

    //get :graph history
    app.get("/api/:graph", function(req, res) {
        const json = require('../data/' + req.params.graph + '.json');
        res.json(json);
    });

    //get graph1 real time
    app.get('/api/graph1/rt', function(req, res) {
        res.json(getRandomInt(5, 10));
    });
  
    // get graph2 realtime
    app.get('/api/graph2/rt', function(req, res) {
        res.json(getRandomInt(2, 18));
    });
};


module.exports = appRouter;
