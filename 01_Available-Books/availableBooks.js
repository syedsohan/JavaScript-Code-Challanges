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
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
