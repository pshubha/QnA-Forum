'user strict';
var sql = require('./db');

//User object constructor
var User = function (user) {
    this.user_name = user.user_name;
    this.user_pass = user.user_pass;
};
User.createTask = function createUser(newUser, result) {
    sql.query("INSERT INTO User set ?", newUser, function (err, res) {

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
User.getTaskById = function createUser(userId, result) {
    sql.query("Select user_name from User where user_id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
User.getAllTask = function getAllTask(result) {
    sql.query("Select * from User", function (err, res) {

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
User.updateById = function (user_id, user_name, result) {
    sql.query("UPDATE User SET user_name = ? WHERE user_id = ?", [user.user_name, user_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
User.remove = function (user_id, result) {
    sql.query("DELETE FROM User WHERE user_id = ?", [user_id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = User;