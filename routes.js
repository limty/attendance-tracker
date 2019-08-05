module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

   // require the tweedr controller

    const tweetControllerCallbacks = require('./controllers/tweet')(allModels);

//user ====================================

    //get index path to display home page
    app.get('/', tweetControllerCallbacks.home);

    //get register path to display new register form
    app.get('/register/new', tweetControllerCallbacks.getRegister);

    //post register path redirect to user page
    app.post('/register', tweetControllerCallbacks.postRegister);



    //get login path to display login form
    app.get('/login/new', tweetControllerCallbacks.getLogin);

    //get login path redirect to user page
    app.post('/login', tweetControllerCallbacks.postLogin);

    //get login path to to display user page
    app.get('/user', tweetControllerCallbacks.getUser);

//tweets ==================================

    //get new tweet path to display new tweet form
    app.get('/tweet/new', tweetControllerCallbacks.getTweet);

    //post new tweet
    app.post('/tweet', tweetControllerCallbacks.postTweet);

//=========================================

//All paths will go to controllers/tweet.js

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};