import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }

    printInfo(){
        console.log(`The book '${this.name}' is written by ${this.author} in ${this.year} and has ${this.format} format`);
    }

    get format() {
        return this._format;
    }

    set format(value){
        if(typeof value !== 'string' || value === ''){
            console.log('Enter a string value for format');
            return;
        }
        this._format = value;
    }

    static formatBook(bookInstance, format){
        return new EBook(
            bookInstance.name,
            bookInstance.author,
            bookInstance.year,
            format
        );
    }
}
