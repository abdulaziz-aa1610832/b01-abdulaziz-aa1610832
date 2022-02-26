import { BookCatalog ,Donor,Book} from './BookCatalog.js';
import { expect } from 'chai';

const donor1 = new Donor(111,"Ibrahim","Ahmed","8283773","Qatar street","Doha","ibrahim@gmail.com","123123")
const donor2 = new Donor(222,"Ali","Ahmed","45777","Qatar street2","Doha","ali.ahmed@gmail.com","445566")
const donor3 = new Donor(333,"Aseel","Ahmed","7567","Qatar street 44","Doha","assel@gmail.com","33433")

const book1= new Book(1,"Web","Orell","",111)
const book2= new Book(2,"JS","Orell 2","",333)
const book3= new Book(3,"CSS","CSS 2","",222)
const book4= new Book(4,"HTML","HTML 2","",222)

var bookCatalog=new BookCatalog()

describe('AddBook', () => {
    describe('AddBook function', () => {
        it('should add book to books array', () => {
            bookCatalog.addBook(book1)
            expect(bookCatalog.books).to.have.lengthOf(1);
        });
    });
});
describe('updateBook', () => {
    describe('updateBook function', () => {
        it('should update book info and return true', () => {
            const bookUpdate= new Book(1,"Web Programming","Orell george","https://google.com",111)
            expect(bookCatalog.updateBook(bookUpdate)).to.be.true
        });
    });
});
describe('deleteBook', () => {
    describe('deleteBook function', () => {
        it('should delete book to books array', () => {
            bookCatalog.deleteBook(book1.bookId)
            expect(bookCatalog.books).to.have.lengthOf(0);
        });
    });
});
describe('getBooks', () => {
    describe('getBooks function', () => {
        it('should get all books in array', () => {
            bookCatalog.addBook(book1)
            bookCatalog.addBook(book2)
            bookCatalog.addBook(book3)
            bookCatalog.addBook(book4)
            expect(bookCatalog.getBooks("pending")).to.have.lengthOf(4);
            expect(bookCatalog.getBooks()).to.have.lengthOf(0);
        });
    });
});
describe('getDonorBooks', () => {
    describe('getDonorBooks function', () => {
        it('should get donor\'s books ', () => {
            expect(bookCatalog.getDonorBooks(donor2.donorId)).to.have.lengthOf(2);
        });
    });
});
describe('getTopDonors', () => {
    describe('getTopDonors function', () => {
        it('should get top donors ids with their books ', () => {
            expect(bookCatalog.getTopDonors(1)[0]).not.to.be.null
        });
    });
});

