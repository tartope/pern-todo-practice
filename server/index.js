//requires the libraries
const express = require("express");
//runs the express library
const app = express();
//requires cors
const cors = require("cors");
//requires pool from db.js file: can run queries with pg
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());  //req.body object: gets data from the client. gives access to req.body so json data can be retrieved.

//ROUTES//

//create a todo
//it takes time to create/get data, so 'async' lets the function 'await' before it continues.
app.post('/todos', async(req,res)=>{
    //try/catch is for error handling
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT INTO todos (description) VALUES($1) RETURNING *', [description]);  //'[description]' inside the query is the value of $1 (allows dynamic data). 'RETURNING *' used to return the data.
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
});

//get all todos 
app.get('/todos', async(req,res)=>{
    try {
        const allTodos = await pool.query('SELECT * FROM todos');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get('/todos/:id', async(req,res)=>{
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todos WHERE todo_id = $1', [id]);  //'WHERE' specifies the type of todo wanted
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.put('/todos/:id/', async(req,res)=>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query('UPDATE todos SET description = $1 WHERE todo_id = $2', [description, id]);
        res.json('Todo was update!');
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete('/todos/:id/', async(req,res)=>{
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todos WHERE todo_id = $1', [id]);
        res.json('Todo was deleted!');
    } catch (err) {
        console.error(err.message);
    }
});

//gets the server to start
//'nodemon index' command detects changes in the file and restarts server
app.listen(3000, () => {
    console.log("server has started on port 3000");
});

//sudo npm install -g --force nodemon