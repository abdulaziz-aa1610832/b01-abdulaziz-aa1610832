export class Donor {
    constructor(donorId, firstName, lastName, phone, street, city, email, password) {
        this.donorId = donorId, this.firstName = firstName,
            this.lastName = lastName, this.phone = phone,
            this.street = street, this.city = city,
            this.email = email, this.password = password
    }

}
export class Book {
    constructor(bookId, title, author, imageUrl, donorId, status) {
        this.bookId = bookId, this.title = title, this.author = author, this.imageUrl = imageUrl, this.donorId = donorId,
            this.status = status
    }

}
export class BookCatalog {

    constructor() {
        this.books = []
        this.donors = []
    }

    addBook(book) {
        book.status = 'pending'
        this.books.push(book)
    }

    updateBook(book) {
        const bookIndex = this.books.findIndex((b => b.bookId == book.bookId));
        if (bookIndex != -1) {
            book.status=this.books[bookIndex].status
            this.books[bookIndex] = book
            return true;
        }
        else
            return false;

    }
    deleteBook(bookId) {
        const bookIndex = this.books.findIndex((b => b.bookId == bookId));
        if (bookIndex != -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        else
            return false
    }
    getBooks(status = "available") {
        const books = this.books.filter(b => b.status == status)
        return books;
    }
    getDonorBooks(donorId) {
        const books = this.books.filter(b => b.donorId == donorId)
        return books;
    }
    getTopDonors(topCount) {
        var object = {};
        // sum of donor id occurences
        this.books.forEach((b) => {
            if (object.hasOwnProperty(b.donorId)) {
                object[b.donorId] = object[b.donorId] + 1;
            } else {
                object[b.donorId] = 1;
            }
        });
        const sortedIds = Object.keys(object).sort((a, b) => object[b] - object[a])
        var donorsWithBooks = {}
        var topDonorsIds = sortedIds.splice(0, topCount)
        topDonorsIds.forEach(donorId => {
            var donorInfo = this.donors.filter(d => d.donorId == donorId)
            var donorBooks = this.getDonorBooks(donorId)
            donorsWithBooks[donorId] = donorBooks
        })
        return donorsWithBooks;

    }
    addDonor(donor) {
        this.donors.push(donor)
    }
    updateDonor(donor) {
        const donorIndex = this.donors.findIndex((d => d.donorId == donor.donorId));
        if (donorIndex != -1) {
            this.donors[donorIndex] = donor;
            return true
        }
        else {
            return false
        }
    }
    deleteDonor(donorId) {
        if (!donorId) return false
        const associatedBooks = this.getDonorBooks(donorId).length
        if (associatedBooks == 0) {
            const donorIndex = this.donors.findIndex((d => d.donorId == donorId));
            if (donorIndex != -1) {
                this.donors.splice(donorIndex, 1);
                return true;
            }
            else {
                return false;
            }
        }

        return false;
    }

}