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
        const {description} = req.body;
        const newTodo = await pool.query('INSERT INTO todos (description) VALUES($1) RETURNING *', [description]);  //'[description]' inside the query is the value of $1 (allows dynamic data). 'RETURNING *' used to return the data.
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
})

//get all todos 

//get a todo

//update a todo

//delete a todo

//gets the server to start
//'nodemon index' command detects changes in the file and restarts server
app.listen(3000, () => {
    console.log("server has started on port 3000");
});

//sudo npm install -g --force nodemon