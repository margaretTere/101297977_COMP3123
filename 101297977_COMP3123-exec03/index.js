var http = require("http");

//TODO - Use Employee Module here
///
const employees = require('./Employee');

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise
//Define Server Port
const port = process.env.PORT || 8081
//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            
        } else if (req.url === '/employee') {

            //TODO - Display all details for employees in JSON format
            const emp_info = JSON.stringify(employees);
            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(emp_info);

        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const full_names = employees.map(e => e.firstName + ' ' + e.lastName).toSorted();
            const names = JSON.stringify(full_names);
            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(names);
            
        } else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const salary = employees.reduce((total, e)=> total + e.Salary, 0);
            const res_data = { "total_salary" : salary }
            const total_salary = JSON.stringify(res_data);
            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(total_salary);
        } else
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})