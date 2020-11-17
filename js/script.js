"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films have you seen?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for ( let i = 0; i < 2; i++){
        const a = prompt('One of the latest watched films?', ''),
              b = prompt('What rank of it on your mind?', '');
    
              if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
              }else {
                  console.log('error');
                      i--;
                  
              }
    
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('not much');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count<= 30) {
        console.log('good enough');
    }else if (personalMovieDB.count >= 30){
        console.log('real good!');
    } else {
        console.log('error');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGeners(){
    for(let i = 1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Your lovely gener on number ${i}`);
    }
}
writeYourGeners();

// console.log(personalMovieDB);