CREATE TABLE IF NOT EXISTS Artists (
    id SERIAL PRIMARY KEY,
    name TEXT,
    photo_url TEXT,
    nationality TEXT
);

CREATE TABLE IF NOT EXISTS Songs (
    id SERIAL PRIMARY KEY,
    title TEXT,
    album TEXT,
    preview_link TEXT,
    artwork TEXT,
    artist_id INT
);

CREATE TABLE IF NOT EXISTS Playlists (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS Playlists_Songs (
    id SERIAL PRIMARY KEY,
    playlist_id Int,
    song_id Int
);

CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS Favorites (
    id SERIAL PRIMARY KEY,
    song_id INT,
    user_id INT
);


