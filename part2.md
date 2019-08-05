# tunr relationships

Build relationships into the tunr app.

### Artist's songs:

(note this functionality does not require any JOIN queries, just a 2nd SQL query)

GET `/artist/1/songs`
This page displays a list of songs for this artist

GET `/artist/1/songs/new`
This page renders a form to create a new song.

The `action` of the form can be set to send the appropriate artist id needed to create the song.

POST `/artist/1/songs`
This route creates a new song with the appropriate artist.

### Further: Playlist
Add the ability to put songs in a playlist.

Add a table for `playlist`. Add a second table to record which somgs are in a playlist. This is a join table between a playlist and songs. (each record in the join table records the adding of one song to the playlist)

GET `/playlist` - list all the playlists

GET `/playlist/new` - render the form to create a new playlist

POST `/playlist` - create a new playlist

GET `/playlist/:id` - show all the song titles inside this playlist

POST `/playlist/:id` - for this playlist, put a single song on the playlist


### Further
For the form at `/songs/new`, add a dropdown of artists to select from when creating a new song.

### Further: Playlist
Restrict the user from adding a song to a playlist twice.

### Further
Add a button to each song in the lists of songs ( `/songs`, `/artist/:id/songs` ) that goes to a new page.

This page will have a list of playlists. Let the user add the song to any playlist.

**sub-futher**: If a playlist already has the song in it, then don't render that playlist in the list.

### Further
Add the ability for the user to add the song to multiple playlists at once. ( this is a checkbox form input )
