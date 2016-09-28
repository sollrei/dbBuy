
// ----------------- mongodb ---------------- //

const MongoClient = require('mongodb').MongoClient;
const urlDb = 'mongodb://localhost:27017/myDatabase';


function insertData (db, collectionName, data, callback) {
    console.log('insert document');

    const collection = db.collection(collectionName);
    // Insert some documents

    collection.insertOne(data, function(err, result) {
        if(err){
            console.log(err)
        } else {
            console.log("插入成功");
            callback(result);
        }

    });
}

function findData (db, collectionName, findOpt, callback) {
    console.log('find database');

    const collection = db.collection(collectionName);
    // Insert some documents

    collection.find(findOpt).toArray(function(err,docs){
        if(err) throw  err;
        else{
            callback && callback(docs);
            db.close();
        }
    });
}



// ----------------- http server ---------------- //

const url = require('url');
const http = require('http');
const port = 1337;

function findProduct (filter, response) {

    MongoClient.connect(urlDb, function(err, db) {
        console.log("Connected successfully to server");

        findData(db, 'product', filter, (docs) => {

            console.log(JSON.stringify(docs))
            response.write(JSON.stringify(docs));
            response.end();
            db.close();

        });

    });

}

const requestHandler = (request, response) => {

    console.log(request.url);

    const parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname && parsedUrl.pathname === '/product/') {

        if (parsedUrl.search) {

            const queryObj = parsedUrl.query;
            console.log(queryObj);
            findProduct(queryObj, response);

        } else {
            findProduct({}, response);
        }

    } else {
        response.end('Hello Node.js Server!');
    }

};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});





// console.log('Server running at http://127.0.0.1:1337/');






