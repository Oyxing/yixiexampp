const MongoClient = require('mongodb').MongoClient;

//noinspection JSAnnotator
let url = "mongodb://localhost:27017/yxmysql";  //数据库名 yxmysql
//noinspection JSAnnotator
let ObjectId = require('mongodb').ObjectID;

// 连接数据库
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据连接成功");
    var data = { "name": "xixihaha" }; //调出名字为xixihaha的类名进行删除
    //deleteMany    删除的方法
    db.collection("people").deleteMany(data, function(err, result) {
        if (err) {
            console.log("数据删除失败");
            return;
        }
        console.log("数据删除成功");
        db.close();
        console.log("数据库连接关闭");
    })

})