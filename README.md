# pern-todo-practice
1. Postgresql: connects db with server in order to run pg queries
2. Express: used to quickly create server in node.js
3. React: used to build the frontend
4. Node.js: used to
## Steps 
### Build Server
1. Create 'server' folder
2. In 'server'  run 'npm init'; then 'npm i express pg cors'
3. In 'server' create 'index.js' file
4. In 'index.js' require 'express', create 'app' variable, and require 'cors'
5. Create 'app.listen()' method to listen to port number
6. Use 'node index' or 'nodemon index' to run server and see changes
7. Create middleware
### Create Postgresql Database and Table 
8. In 'server' create 'database.sql' file
9. In 'database.sql' write commands for database and table (visually easier to see/write)
10. Open postgresql and copy/paste command for database to create it
11. Enter database and copy/paste command for table to create it
### Connect Database to Server
12. In 'server' create 'db.js' file
13. In 'db.js' configure connection to database by requiring pg library
14. In 'index.js' require 'pool'
### Build Routes
15. Create CRUD actions using 'app'
### Create Client Side
16. In parent folder run 'npx create-react-app client'
17. Remove files not needed ('App.test.js', 'logo.svg', 'serviceWorker.js', 'setupTests.js')
18. Remove imports not needed from 'index.js' and 'App.js' 
19. Create 'components' folder with all component files needed
20. In 'index.html' file add 'bootstrap 4' css link, and add modal scripts
21. Build InputTodo
22. Build ListTodo (can use 'bootstrap 4' tables to create)
23.  Build with 'bootstrap 4 modal'

## Educational source

[freeCodeCamp.org](https://www.youtube.com/watch?v=ldYcgPKEZC8)