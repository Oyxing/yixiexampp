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
    var data = { "name": "nihao" }; //修改人的名字  ID
    console.log(data)
    //updataOne     更新的方法
    db.collection("people").updateOne(data, { $set: { "age": 26 } }, function(err, result) {
        if (err) {
            console.log("数据更新失败");
            return;
        }
        console.log("数据更新成功");
        db.close();
        console.log("数据库连接关闭");
    })

})