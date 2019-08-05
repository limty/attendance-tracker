console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
var sha256 = require("js-sha256");

// Initialise postgres client
const configs = {
  user: 'lty',
  host: '127.0.0.1',
  database: 'tunr_db',
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
  // query database for all pokemon

  // respond with HTML page displaying all pokemon
  const queryString = "SELECT * from artists ORDER BY id ASC";

  pool.query(queryString, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      response.send("query error");
    } else {
      let cookieLogin =
        sha256(req.cookies["user_id"] + "logged_in" + SALT) ===
        request.cookies["logged_in"]
          ? true
          : false;

      let data = {
        title: "index",
        artists: result.rows,
        cookieLogin: cookieLogin
      };
      response.render("index", data);
    }
  });
});

app.get('/new', (request, response) => {
  // respond with HTML page with form to create new pokemon
  response.render('new');
});

//get songs by artist id
app.get('/artist/:id/songs', (req, res) => {
    const queryString = 'SELECT DISTINCT songs.id,songs.title FROM songs INNER JOIN artists ON (artists.id = songs.artist_id) WHERE artists.id =' + parseInt(req.params.id) + "ORDER BY  songs.title ASC";
    pool.query(queryString, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            res.send('query error');
        } else {
            let cookieLogin = (sha256(req.cookies["user_id"] + 'logged_in' + SALT) === req.cookies["logged_in"]) ? true : false;
            data = {
                title: "Song List",
                songs: result.rows,
                id: parseInt(req.params.id),
                cookieLogin: cookieLogin
            }
            res.render("songlist", data);
        }
    });
})

//add new song
app.get('/artist/:id/songs/new', (req, res) => {
    const queryString = 'SELECT * FROM artists';
    pool.query(queryString, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            res.send('query error');
        } else {
            let cookieLogin = (sha256(req.cookies["user_id"] + 'logged_in' + SALT) === req.cookies["logged_in"]) ? true : false;
            let id = parseInt(req.params.id);
            let data = {
                title: "New Song",
                id: id,
                artists: result.rows,
                cookieLogin: cookieLogin
            }
            res.render("newsong", data);
        }
    });

})

//add new song POST
app.post('/artist/:id/songs', (req, res) => {
    let id = parseInt(req.body.artist);
    const queryString = 'INSERT INTO songs (title, album, preview_link, artwork,artist_id) VALUES ($1,$2,$3,$4,$5)';
    let arr = [req.body.title, req.body.album, req.body.preview_link, req.body.artwork, id];
    pool.query(queryString, arr, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            res.send('query error');
        } else {

            let url = "/artist/" + id + "/songs";
            res.redirect(url);
        }
    });

})

app.get("/login/register", (req, res) => {
  let cookieLogin =
    sha256(req.cookies["user_id"] + "logged_in" + SALT) ===
    req.cookies["logged_in"]
      ? true
      : false;
  if (cookieLogin) {
    res.send("LOG OUT FIRST BEFORE YOU CAN REGISTERE");
  } else {
    let cookieLogin =
      sha256(req.cookies["user_id"] + "logged_in" + SALT) ===
      req.cookies["logged_in"]
        ? true
        : false;
    let data = {
      title: "Register",
      cookieLogin: cookieLogin
    };
    res.render("register", data);
  }
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
