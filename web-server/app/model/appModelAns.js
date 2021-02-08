'user strict';
var sql = require('./db');

//User object constructor
var Answers = function (ans) {
    this.user_id = ans.user_id;
    this.q_id = ans.q_id;
    this.ans_text = ans.ans_text;

    this.posted_at = new Date();

};
Answers.createTask = function createUser(newAns, result) {
    console.log(newAns);
    sql.query("INSERT INTO Answers set ?", newAns, function (err, res) {

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
Answers.getTaskById = function createUser(aId, result) {
    sql.query("Select ans_text from Answers where ans_id = ? ", aId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Answers.getAllTask = function getAllTask(result) {
    sql.query("select u.user_name , a.ans_text, a.ans_id ,a.q_id from Answers a ,User u where u.user_id = a.user_id ", function (err, res) {

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
Answers.updateById = function (ans_id, ans_text, result) {
    sql.query("UPDATE Answers SET ans_text = ? WHERE ans_id = ?", [ans.ans_text, ans_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Answers.remove = function (q_id, result) {
    sql.query("DELETE FROM Answers WHERE ans_id = ?", [ans_id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Answers;