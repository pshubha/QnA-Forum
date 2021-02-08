const express = require('express');
const router = express.Router();
var todoList = require('../controller/appControllerQue');

// todoList Routes
router.route('/Questions')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

router.route('/Questions/:qId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

module.exports = router;