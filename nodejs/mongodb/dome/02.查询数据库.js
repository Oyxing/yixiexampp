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
    var cursor = db.collection('people').find({}); //find查看数据

    //  用find 方法获取到数据库里面的值

    //数据表名

    //  用循环便利 输出结果
    cursor.each(function(err, doc) {
        console.log(doc);
        if (doc != null) {
            console.log("数据查询成功");
            console.log(doc.name, doc.age);//数据库内容
            db.close();
        }
    })

})