console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'lty',
  host: '127.0.0.1',
  database: 'attendance',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/one-class', (request, response) => {
    // query database for students
    const queryString = "SELECT * from students";
    // const queryString =
    //   "SELECT students.id, students.studentname, students.stud_class, teachers.department, teachers.teachername FROM students INNER JOIN teachers ON teachers.id = students.teachers_id";
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
        //console.log("query result:", result);
        let data = {
        title: "Students",
        students: result.rows
        };
        response.render("oneClass",data);
      }
    });
  });

//add new Student
app.get('/add-student', (req, res) => {
    let data = {
      title: "Add Student"
    };
    res.render("addStudent", data);
});

//add new student POST
app.post('/post-student', (req, res) => {
    //console.log()
    //let id = parseInt(req.body.teacher);
    const queryString =
      "INSERT INTO students (stud_name, class_name) VALUES ($1,$2)";
    let arr = [
      req.body.stud_name,
      req.body.class_name
    ];
    pool.query(queryString, arr, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            res.send('query error');
        } else {
            res.redirect('/one-class');
        }
    });

});

app.get("/classes", (request, response) => {
  // query database for students
  const queryString = "SELECT * from stud_class";

  pool.query(queryString, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      response.send("query error");
    } else {
      //console.log("query result:", result);
      let data = {
        title: "List of Classes",
        classes: result.rows
      };
      response.render("classes", data);
    }
  });
});

//add new Student
app.get("/add-class", (req, res) => {
  let data = {
    title: "Add class"
  };
  res.render("addClass", data);
});

//add new student POST
app.post("/post-class", (req, res) => {
  //console.log()
  //let id = parseInt(req.body.teacher);
  const queryString =
    "INSERT INTO stud_class (class_name, form_teacher) VALUES ($1,$2)";
  let arr = [req.body.class_name, req.body.form_teacher];
  pool.query(queryString, arr, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      res.send("query error");
    } else {
      res.redirect("/classes");
    }
  });
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
