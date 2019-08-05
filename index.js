console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'postgres',
  password: 'password',
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

app.get('/', (request, response) => {
    // query database for students
    const queryString = "SELECT * from students";

    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
        //console.log("query result:", result);
        let data = {
        title: "Present Students",
        students: result.rows
        };
        response.render("home",data);
      }
    });
  });

//add new Student
app.get('/check-in', (req, res) => {
    let data = {
      title: "Check In Student"
    };
    res.render("checkin", data);
});

//add new student POST
app.post('/post-student', (req, res) => {
    //console.log()
    let id = parseInt(req.body.teacher);
    const queryString =
      "INSERT INTO students (studentname, class, teachers_id) VALUES ($1,$2,$3)";
    let arr = [
      req.body.studentname,
      req.body.class,
      parseInt(req.body.teachers_id)
    ];
    pool.query(queryString, arr, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            res.send('query error');
        } else {
            res.redirect('/');
        }
    });

});

app.get("/teachers", (request, response) => {
  // query database for students
  const queryString = "SELECT * from teachers";

  pool.query(queryString, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      response.send("query error");
    } else {
      //console.log("query result:", result);
      let data = {
        title: "List of Teachers",
        teachers: result.rows
      };
      response.render("teachers", data);
    }
  });
});

//add new Student
app.get("/add-teacher", (req, res) => {
  let data = {
    title: "Add Teacher"
  };
  res.render("addTeacher", data);
});

//add new student POST
app.post("/post-teacher", (req, res) => {
  //console.log()
  let id = parseInt(req.body.teacher);
  const queryString =
    "INSERT INTO teachers (name, department, id) VALUES ($1,$2,$3)";
  let arr = [req.body.name, req.body.department, parseInt(req.body.id)];
  pool.query(queryString, arr, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      res.send("query error");
    } else {
      res.redirect("/teachers");
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
