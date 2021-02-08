'use strict';

var User = require('../model/appModel.js');

exports.list_all_tasks = function (req, res) {
  User.getAllTask(function (err, user) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};



exports.create_a_task = function (req, res) {
  var new_task = new User(req.body);

  //handles null error 
  if (!new_task.user_name || !new_task.user_pass) {

    res.status(400).send({ error: true, message: 'Please provide user/status' });

  }
  else {

    User.createTask(new_task, function (err, user) {

      if (err)
        res.send(err);
      res.json(user);
    });
  }
};


exports.read_a_task = function (req, res) {
  User.getTaskById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_task = function (req, res) {
  User.updateById(req.params.userId, new User(req.body), function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_task = function (req, res) {


  User.remove(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
