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
        // },{
        //     $lookup: {
        //         from: 'gc_company',
        //         localField: 'cid',
        //         foreignField: 'cid',
        //         as: 'cominfo'
        //     }
        },{
            $limit: 10
        },{
            $project: {
                proname: 1,
                cid: 1,
                pid: 1,
                picurl: 1
                // ,
                // 'cominfo.comname': 1
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


function findProductDetail (db, filter, callback, skip) {
    console.log('find collection:pd_info');

    const collection = db.collection('pd_info');

    collection.aggregate([
        {
            $match: filter
        },{
            $lookup: {
                from: 'gc_company',
                localField: 'cid',
                foreignField: 'cid',
                as: 'cominfo'
            }
        },{
            $limit: 1
        },{
            $project: {
                proname: 1,
                pid: 1,
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

        } else if (type === 'pddetail') {

            findProductDetail(db, newFilter, (docs) => {
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
                pathName = parsedUrl.pathname || '';

            switch (pathName) {
                case '/product/':
                    search(query.filter, 'product', response, query.skip);
                    break;
                case '/company/':
                    search(query, 'company', response);
                    break;
                case '/hot/':
                    search(query, 'hot', response);
                    break;
                case '/pddetail/':
                    search(query, 'pddetail', response);
                    break;
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


