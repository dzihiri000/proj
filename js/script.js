"use strict";

const numberOfFilms = +prompt('How much films have you seen?', '');

const personalMovieDb =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('What film did you watch last time?', ''),
b = prompt('What mark for that film?', ''),
c = prompt('What film did you watch last time?'),
d = prompt('What mark for that film?');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);