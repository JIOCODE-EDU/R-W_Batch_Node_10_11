import { Book } from "../models/book.models";

// create book with controller

// create book

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(res.body);
    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// get Book

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// updateBook

export const updateBook = async (req, res) => {
  try {
    const books = await Book.findByIdAndUpdate(req.params.id, res.body, {
      new: true,
      runValidators: true,
    });

    if (!books) {
      return res.status(404).json({
        success: false,
        error: "Book Not Found!",
      });
    }

    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// Delete Book

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        error: "Book Not Found!",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
