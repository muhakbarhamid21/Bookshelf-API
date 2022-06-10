const {
  saveNewBook, getAllBooks, getBookById, deleteBookById, changeBookData,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: changeBookData,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
