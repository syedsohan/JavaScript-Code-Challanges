// Book Class
class Book {
  constructor(title, author, ISBN, numberOfCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numberOfCopies = numberOfCopies;
  }
  // Getter function
  get availability() {
    return this.getAvailability();
  }
  getAvailability() {
    if (this.numberOfCopies === 0) {
      return "Out of stock";
    } else if (this.numberOfCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }
  // Sell Method
  sell(numberOfCopiesSold = 1) {
    this.numberOfCopies -= numberOfCopiesSold;
  }
  // Restock Method
  restock(numberOfCopiesAdded = 5) {
    this.numberOfCopies += numberOfCopiesAdded;
  }
}
// TechnicalBook Class
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numberOfCopies, edition) {
    super(title, author, ISBN, numberOfCopies);
    this.edition = edition;
  }
  // getEdition() Method
  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);

const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
