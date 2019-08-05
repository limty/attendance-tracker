# tunr login

### Register

Create a route and `jsx` file that renders a form for the user to register.

GET `/register`

Create a route that accepts the `POST` request from the form.

After the user has been put in the DB, set cookies to set them as logged in:

- a cookie for their username
- a cookie for their hashed `loggedIn` cookie
- their user id

Redirect them to the home page.

POST `/register`

### Login

Create a route that renders the form for the user to log in.

GET `/login`

Create a route that accepts the `POST` request from the form.

POST `/login`

After you verify the user, set cookies to set them as logged in:

- a cookie for their username
- a cookie for their hashed `loggedIn` cookie
- their user id

Redirect them to the home page.

### User Generated Content

Add the ability for the user to favotie songs.

This is a new table: `favorites`

This table is a join table.

It has 2 foreign keys in it:

- song id
- user id

The simplest version simply uses a form to create the record in the favorites table:

- create a route that renders a form for the user to enter the song they want to favorite. This form can just be a normal input where the user enters the id of a song they want to favorite.

- GET `/favorites/new`

- use the user id cookie mentionmed above and the `request.body` to create the record in the DB

- POST `/favorites`

- display a list of all the user's favorites

- GET `/favorites`

- show an error if the user is not logged in

##### further
On the page of songs `/songs/:id` add a button to allow the user to favorite that song. (this would be a whole HTML form with a single button inside it)

##### further
add this button to every other place that a song is displayed




