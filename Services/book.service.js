const db = require("../Models");
// models path depends on your structure
const Books = db.books;

async function createBook(bookData) {
    return Books.create(bookData)
}
async function getAllBooks() {
    attributes = ["title", "author", "publicationYear"]
    return Books.findAll({
        attributes: attributes
    })
}

module.exports = {
    createBook,
    getAllBooks
}