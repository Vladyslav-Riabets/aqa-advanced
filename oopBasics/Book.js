export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value === ''){
        console.log("Enter a string value for name");
        return;
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value === ''){
        console.log("Enter a string value author");
        return;
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number' || value < 0 ){
        console.log("Enter a number value for year");
        return;
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `The book '${this.name}' is written by ${this.author} in ${this.year}`
    );
  }

  static oldestBook(booksArray){
    return booksArray.reduce((oldest, current) => {
        if(current.year < oldest.year){
            return current;
        }
        return oldest;
    }); 
  }
}

