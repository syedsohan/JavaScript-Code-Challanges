// Movie Class
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  // getOverview Function
  getOverview() {
    return `${this.title} is a ${this.genre} movie directed by ${this.director} and released in ${this.releaseYear} with a rating of ${this.rating}`;
  }
}
const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
console.log(TheNotebook.getOverview());
