# Tunr 1.0!

We're going to be building Tunr, the worlds #1 music catalog / player (those
Spotify haters can't keep up with us).

![https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

## Part 1 - Database / Schema / Models

In this repo are two files `artist_data.sql` and `songs.sql`. 

### Create the database

Create a postgres database called `tunr_db`. Make sure to use that **exact**
name, or you'll have trouble later on!

### Create a schema

Inside the db folder, create a `tables.sql` file, and then load it into your
`tunr_db` database.

Here's what our data model looks like:

*Artists*

| column name  | type |
|--------------|------|
| id   | primary key (int) |
| name | text |
| photo_url | text |
| nationality | text |

*Songs*

| column name  | type |
|--------------|------|
|id | primary key (int) |
|title | text |
|album | text |
|preview_link | text |
|artwork | text |
|artist_id | foreign key (int) |


### Load the Seed Data
- Seed your tables with `artist_data.sql` and `songs.sql`.

### Set up express app
- Define a route with view defined at `/`. For now it should say `Hello World` when you visit that url.

## Part 2 - Build a RESTful Interface using express

Make sure to commit after completing each feature. Don't move to the next feature without first finishing a feature.

### The Index Feature

Build the index feature for `artists`

### The Show Feature

Build the show feature for an `artist`

### The Create Feature

Build a feature that creates a new `artist` in the database.

### The Edit Feature

Build a feature that allows a user to edit an existing `artist` in the database

### The Delete Feature

Build a feature that allows users to delete an existing `artist` from the database.

## Further
- create the 7 RESTful Routes for `songs`
- make routes for`songs` that are nested under artists:
  - `/artist/1/songs`
  - `/artist/1/songs/new`
