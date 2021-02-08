'user strict';
var sql = require('./db');

//User object constructor
var Questions = function (que) {
    this.user_id = que.user_id;
    this.q_text = que.q_text;
    this.posted_at = new Date();

};
Questions.createTask = function createUser(newQue, result) {
    sql.query("INSERT INTO Questions set ?", newQue, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Questions.getTaskById = function createUser(qId, result) {
    sql.query("Select q_text from Questions where q_id = ? ", qId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Questions.getAllTask = function getAllTask(result) {
    sql.query("Select * from Questions order by q_id desc ", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Questions.updateById = function (q_id, q_text, result) {
    sql.query("UPDATE Questions SET q_text = ? WHERE q_id = ?", [que.q_text, q_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Questions.remove = function (q_id, result) {
    sql.query("DELETE FROM Questions WHERE q_id = ?", [q_id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Questions;