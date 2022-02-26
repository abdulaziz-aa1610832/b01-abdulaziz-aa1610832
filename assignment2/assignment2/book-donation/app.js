
import { BookCatalog ,Donor,Book} from './BookCatalog.js';

const donor1 = new Donor(111,"Ibrahim","Ahmed","8283773","Qatar street","Doha","ibrahim@gmail.com","123123")
const donor2 = new Donor(222,"Ali","Ahmed","45777","Qatar street2","Doha","ali.ahmed@gmail.com","445566")
const donor3 = new Donor(333,"Aseel","Ahmed","7567","Qatar street 44","Doha","assel@gmail.com","33433")
const donor4 = new Donor(444,"Sara","Omar","576578","Qatar street 34","Doha","sara@gmail.com","556644")

const book1= new Book(1,"Web","Orell","",111)
const book2= new Book(2,"JS","Orell 2","",333)
const book3= new Book(3,"CSS","CSS 2","",222)
const book4= new Book(4,"HTML","HTML 2","",222)

const bookCatalog=new BookCatalog()
// adding donors
bookCatalog.addDonor(donor1)
bookCatalog.addDonor(donor2)
bookCatalog.addDonor(donor3)
bookCatalog.addDonor(donor4)

// adding books
bookCatalog.addBook(book1)
bookCatalog.addBook(book2)
bookCatalog.addBook(book3)
bookCatalog.addBook(book4)

console.log( "getBooks",bookCatalog.getBooks("pending") )
console.log( "deleteBook ",bookCatalog.deleteBook(1) )
console.log( "getBooks after delete",bookCatalog.getBooks("pending"))



console.log("getDonorBooks", bookCatalog.getDonorBooks(333) )
console.log("getTopDonors", bookCatalog.getTopDonors(1))


console.log("deleteDonor with associated books",bookCatalog.deleteDonor(333));
console.log("deleteDonor without associated books",bookCatalog.deleteDonor(444));

const donorUpdate = new Donor(333,"Sara","Omar","576578","Qatar street 34","Doha","sara.omar@gmail.com","password")
console.log("updateBook",bookCatalog.updateDonor(donorUpdate));
const getUpdateDonor =bookCatalog.donors.filter(e=>e.donorId ==donorUpdate.donorId )
console.log("Donor Info after update",getUpdateDonor);

const bookUpdate= new Book(4,"HTML Book","Orells George","",222)
console.log("updateBook",bookCatalog.updateBook(bookUpdate));
const getbookUpdate =bookCatalog.books.filter(e=>e.bookId ==bookUpdate.bookId )
console.log("Book Info after update",getbookUpdate);



