const express = require('express');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook} = require('./book.controller');
const router = express.Router(); 
const verifyAdminToken = require('../middleware/verifyAdminToken.js')

//post a Book
router.post("/create-book", verifyAdminToken , postABook)

//get all books
router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook)

// update a book endpoint
router.put("/edit/:id", verifyAdminToken , updateBook)

// delete a book
router.delete("/:id", verifyAdminToken , deleteABook)


module.exports = router;