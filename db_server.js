// ----------------- mongodb ---------------- //

const MongoClient = require('mongodb').MongoClient,
    urlDb = 'mongodb://192.168.12.47:27017/myDatabase';

function findData (db, collectionName, findOpt, callback) {
    console.log('find collection:' + collectionName);

    const collection = db.collection(collectionName);

    collection.find(findOpt).limit(10).toArray(function(err,docs){
        if(err) throw  err;
        else{
            callback && callback(docs);
            db.close();
        }
    });
}

function findProductList (db, filter, callback, skip) {
    console.log('find collection:pd_info');

    const collection = db.collection('pd_info');

    collection.aggregate([
        {
            $match: filter
        },{
            $skip: skip
        },{
            $lookup: {
                from: 'gc_company',
                localField: 'cid',
                foreignField: 'cid',
                as: 'cominfo'
            }
        },{
            $limit: 10
        },{
            $project: {
                proname: 1,
                cid: 1,
                picurl: 1,
                'cominfo.comname': 1
            }
        }
    ]).toArray(function(err,docs){
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

function search (filter, type, response, skip) {

    var newFilter = filter;

    if (filter.proname) {
        newFilter.proname = new RegExp(filter.proname);
    }

    if (filter.name) {
        newFilter.name = new RegExp(filter.name);
    }


    MongoClient.connect(urlDb, function(err, db) {

        console.log("Connected successfully to server");

        if (type === 'product') {

            findProductList(db, newFilter, (docs) => {
                response.write(JSON.stringify(docs));
                response.end();
            }, skip);

        } else {
            findData(db, type, newFilter, (docs) => {

                response.write(JSON.stringify(docs));
                response.end();

            });
        }



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



                    search(query.filter, 'product', response, query.skip);

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


