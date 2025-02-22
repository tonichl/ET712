/* 
toni chen liang
Homework 3 – Objects and exception handling in JS 
*/  

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() { 
        return `${this.title} by ${this.director}, ${this.year}`;
    }
}

class MovieCollection { 
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies[this.movies.length] = movie; // Add movie
        return "Movie added";
    }

    removeMovie(title) {
        let found = false; // check if the movie was found
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                found = true; // Movie found
                // Shift all elements after the found movie one position to the left
                for (let j = i; j < this.movies.length - 1; j++) {
                    this.movies[j] = this.movies[j + 1];
                }
                this.movies.length--; // Reduce the array length by 1
                break; // Exit the loop after removing the movie
                
            }
            
        }
        if (!found) {
            return error; 
        }
    }

    showMovies() {
        if (this.movies.length === 0) {
            console.log("No movies in the collection."); // Handle empty collection
            return;
        }
        for (let i = 0; i < this.movies.length; i++) {
            console.log(this.movies[i].getDetails()); // Log each movie's details
        }
    }
}


const collection = new MovieCollection();

collection.addMovie( new Movie("Star Wars Episode I The Phantom Menace", "George Lucas", 1999));
collection.addMovie( new Movie("Star wars Episode II Attack of the Clones", "George Lucas", 2002));

collection.showMovies(); // Logs details of both movies.

console.log(`remove movie "Star Wars Episode I The Phantom Menace"`)
collection.removeMovie("Star Wars Episode I The Phantom Menace"); // Removes "Star Wars Episode I The Phantom Menace"
console.log(`"Star Wars Episode I The Phantom Menace" removed`)

collection.showMovies(); // Logs details of the remaining movie.

try {
    collection.removeMovie("Star Wars Episode I The Phantom Menace"); //  error: Movie not found.
} catch (e) {
    console.log( "Movie not found.");
}

const emptyCollection = new MovieCollection();
emptyCollection.showMovies(); // Logs: No movies in the collection.

