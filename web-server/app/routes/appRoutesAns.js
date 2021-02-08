const express = require('express');
const router = express.Router();
var todoList = require('../controller/appControllerAns');

// todoList Routes

router.route('/Answers')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

router.route('/Answers/:aId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

module.exports = router;