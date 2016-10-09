// ----------------- mongodb ---------------- //

const MongoClient = require('mongodb').MongoClient,
    urlDb = 'mongodb://192.168.12.47:27017/myDatabase';

function findData (db, collectionName, findOpt, callback) {
    console.log('find collection:' + collectionName);

    const collection = db.collection(collectionName);

    collection.find(findOpt).toArray(function(err,docs){
        if(err) throw  err;
        else{
            callback && callback(docs);
            db.close();
        }
    });
}

// ----------------- http server ---------------- //

const url = require('url'),
    http = require('http'),
    port = 1337;

function search (filter, type, response) {

    var newFilter = filter;

    if (filter.name) {
        newFilter.name = new RegExp(filter.name);
    }

    MongoClient.connect(urlDb, function(err, db) {

        console.log("Connected successfully to server");

        findData(db, type, newFilter, (docs) => {

            response.write(JSON.stringify(docs));
            response.end();

        });

    });

}

const requestHandler = (request, response) => {

    var postData = "",
        parsedUrl = url.parse(request.url, true);

    if (request.method.toUpperCase() === 'GET') {

        response.write('hello');
        response.end();

    } else {

        request.addListener("data", function (data) {
            postData += data;
        });

        request.addListener("end", function () {
            var query = JSON.parse(postData),
                pathName = parsedUrl.pathname;

            if (pathName) {
                if (pathName === '/product/') {

                    search(query, 'product', response);

                } else if (pathName === '/company/') {

                    search(query, 'company', response);

                } else if (pathName === '/hot/') {

                    search(query, 'hot', response);

                }
            }
        });
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});


