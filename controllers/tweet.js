module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic, all paths are from routes.js
   * ===========================================
   */

   //===========================================

   //home path
    let homeControllerCallback = (request, response) => {
      db.tweet.getAll((error, result) => {          //goes to model,getAll function
        console.log("From controller: " + result);
        const data = {
            tweets : result
        }
        response.render('tweet/home', data);    //goes to views
      })
    };

    //===========================================

    //get register path
    let getRegisterControllerCallback = (request, response) => {
        let message = "Welcome Onboard!! Create Your Own Account!";
        const data = {
            message : message
        }
        response.render('tweet/register', data);    //goes to views
    };

    //post register path
    let postRegisterControllerCallback = (request, response) => {
        //check user table if name have already been taken up
        db.tweet.checkName(request.body, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(result);
                if (result != undefined) {
                    response.send("username have been taken up, click back and choose another user name.");
                } else {
                    db.tweet.postRegister(request.body, (error, result) => {    //goes to model, postRegister function
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("From controller: " + result);
                            console.log("Successful Registered");
                            response.cookie("loggedin", true);
                            response.redirect('/user');     //redirect to routes, user
                        }
                    })
                }
            }
        })
    };

    //===========================================

    //get login path
    let getLoginControllerCallback = (request, response) => {
        let message = "Welcome!! Let's get you Log In!!";
        const data = {
            message : message
        }
        response.render('tweet/login', data); //goes to views
    };

    //post login path
    let postLoginControllerCallback = (request, response) => {
        //check if user input wrong name or wrong password
        db.tweet.checkLogin(request.body, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                if (result === null) {
                    response.send("You have keyed in incorrect user name or password, click back and try again.");
                } else {
                    db.tweet.postLogin(request.body, (error, result) => {
                        console.log("From controller: " + result);
                        console.log("Successful Login");
                        response.cookie("loggedin", true);
                        response.redirect('/user'); //redirect to routes, get home
                    })
                }
            }
        })
    };

    //===========================================

    //get user path
    let getUserControllerCallback = (request, response) => {
        db.tweet.getAll((error, result) => {          //goes to model,getAll function
            console.log("From controller: " + result);
            const data = {
                tweets : result
        }
        response.render('tweet/user', data);  //goes to views
      });
    };

    //===========================================

    //get new tweet path
    let getTweetControllerCallback = (request, response) => {
        console.log("getting new tweet");
        response.render('tweet/tweet'); //goes to views
    };

    //post new tweet path
    let postTweetControllerCallback = (request, response) => {
        console.log("posting new tweet");
        db.tweet.postTweet(request.body, (error, result) => {    //goes to model postNew function
            console.log("From controller: " + result);
        })
        response.redirect('/user');  //redirect to routes, get home
    };

    //===========================================

// db.tweet refer tweet file in modal folder
// db.tweet."function" is the link to modal folder (example, "getAll")

// render will go to views folder
// redirect will be route path from routes.js





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

    // routes.js : function name above
  return {
    home: homeControllerCallback,
    getRegister : getRegisterControllerCallback,
    postRegister : postRegisterControllerCallback,
    getLogin : getLoginControllerCallback,
    postLogin : postLoginControllerCallback,
    getUser : getUserControllerCallback,
    getTweet : getTweetControllerCallback,
    postTweet : postTweetControllerCallback
  };

}