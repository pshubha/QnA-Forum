'use strict';

var Answers = require('../model/appModelAns.js');

exports.list_all_tasks = function (req, res) {
  Answers.getAllTask(function (err, ans) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', ans);
    res.send(ans);
  });
};



exports.create_a_task = function (req, res) {
  var new_task = new Answers(req.body);

  //handles null error 
  if (!new_task.user_id || !new_task.q_id || !new_task.ans_text) {

    res.status(400).send({ error: true, message: 'Please provide answer' });

  }
  else {

    Answers.createTask(new_task, function (err, ans) {

      if (err)
        res.send(err);
      res.json(ans);
    });
  }
};


exports.read_a_task = function (req, res) {
  Answers.getTaskById(req.params.aId, function (err, ans) {
    if (err)
      res.send(err);
    res.json(ans);
  });
};


exports.update_a_task = function (req, res) {
  Answers.updateById(req.params.aId, new Answers(req.body), function (err, ans) {
    if (err)
      res.send(err);
    res.json(ans);
  });
};


exports.delete_a_task = function (req, res) {


  Answers.remove(req.params.aId, function (err, ans) {
    if (err)
      res.send(err);
    res.json({ message: 'Answers successfully deleted' });
  });
};
