var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')
const secretWord = "this is JAVASCRIPT!";
/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // ===========================================
  //home path

    let getAll = (callback) => {
        let query = 'SELECT * FROM tweets ORDER BY id';
        dbPoolInstance.query(query, (error, queryResult) => {
            console.log("entered get all")
            if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                console.log(queryResult);
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let checkName = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1)';
        let values = [value.name];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let postRegister = (value, callback) => {
        let hashPassword = sha256(value.password);
        let query = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
        let values = [value.name, hashPassword];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error) {
                callback(error, null);
            } else {
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let checkLogin = (value, callback) => {
        let hashPassword = sha256(value.password);
        let query = 'SELECT * FROM users WHERE name = ($1) AND password = ($2)';
        let values = [value.name, hashPassword];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let postLogin = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1)';
        let values = [value.name];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let getUser = (callback) => {
        let query = 'SELECT * FROM tweets';
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, null);
            }
        })
    };

    // ===========================================

    let postTweet = (value, callback) => {
        let query = 'INSERT INTO tweets (tweet, user_id) VALUES ($1, $2) RETURNING *';
        let values = [value.tweet, value.user_id];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

  // ===========================================
  //register path
  // ===========================================

  return {
    getAll,
    checkName,
    postRegister,
    checkLogin,
    postLogin,
    getUser,
    postTweet
  };
};