import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

// Створення об'єктів класу Book та виклик printInfo для екземплярів
const book1 = new Book("Testing", "Tester", 2025);
const book2 = new Book("Programming", "Programmer", 2019);
const book3 = new Book("Management", "Manager", 2010);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Створення об'єкту класу EBook та вкилик printInfo для екземпляру
const eBook1 = new EBook('Business', 'Businessman', 2005, 'PDF');
const eBook2 = new EBook('Analysis', 'Analyst', 2008, 'TXT');

eBook1.printInfo();
eBook2.printInfo();

// Пошук найстарішої книги з масиву книг Book та EBook
const checkOldest = Book.oldestBook([book1, book2, book3, eBook1, eBook2]);

console.log('\nThe oldest book is:')
checkOldest.printInfo();

// Форматування книг Book у формат EBook
const booksFormatting = EBook.formatBook(book1, 'EPUB');

console.log('\nFormatted books:');
booksFormatting.printInfo();
