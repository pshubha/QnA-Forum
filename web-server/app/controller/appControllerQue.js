'use strict';

var Questions = require('../model/appModelQue.js');

exports.list_all_tasks = function (req, res) {
  Questions.getAllTask(function (err, que) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', que);
    res.send(que);
  });
};



exports.create_a_task = function (req, res) {
  var new_task = new Questions(req.body);

  //handles null error 
  if (!new_task.user_id || !new_task.q_text) {

    res.status(400).send({ error: true, message: 'Please provide question' });

  }
  else {

    Questions.createTask(new_task, function (err, que) {

      if (err)
        res.send(err);
      res.json(que);
    });
  }
};


exports.read_a_task = function (req, res) {
  Questions.getTaskById(req.params.qId, function (err, que) {
    if (err)
      res.send(err);
    res.json(que);
  });
};


exports.update_a_task = function (req, res) {
  Questions.updateById(req.params.qId, new Questions(req.body), function (err, que) {
    if (err)
      res.send(err);
    res.json(que);
  });
};


exports.delete_a_task = function (req, res) {


  Questions.remove(req.params.qId, function (err, que) {
    if (err)
      res.send(err);
    res.json({ message: 'Questions successfully deleted' });
  });
};
