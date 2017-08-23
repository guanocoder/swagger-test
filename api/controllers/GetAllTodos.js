"use strict";

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(request, response) {
    response.json([
        {
            todo_id: 923282821,
            todo: "Who want some?",
            author: "John F.K.",
            createdate: "2017-08-11T23:15:00.000Z",
            duedate: "2017-09-02T21:00:00.000Z",
            completed: false
        },
        {
            todo_id: 241305980,
            todo: "Come get some?",
            author: "Duke N.E.",
            createdate: "2017-08-08T13:45:00.000Z",
            duedate: "2017-09-08T12:00:00.000Z",
            completed: false
        },
        {
            todo_id: 319316432,
            todo: "What the hek is this?",
            author: "Sullivan S.J.",
            createdate: "2017-08-08T13:45:00.000Z",
            duedate: "2017-09-08T12:00:00.000Z",
            completed: true
        },
        {
            todo_id: 732836234,
            todo: "How much Kool-Aid did you take?",
            author: "Griffin T.J.",
            createdate: "2017-08-08T13:45:00.000Z",
            duedate: "2017-09-08T12:00:00.000Z",
            completed: true
        }        
    ]);
}