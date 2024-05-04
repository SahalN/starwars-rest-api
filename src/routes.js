/** @format */

const {
  addQuoteHandler,
  getAllQuotesHandler,
  getAllQuotesByIdHandler,
  editQuoteByIdHandler,
  deleteQuoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/quotes",
    handler: addQuoteHandler,
  },
  {
    method: "GET",
    path: "/quotes",
    handler: getAllQuotesHandler,
  },
  {
    method: "GET",
    path: "/quotes/{id}",
    handler: getAllQuotesByIdHandler,
  },
  {
    method: "PUT",
    path: "/quotes/{id}",
    handler: editQuoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/quotes/{id}",
    handler: deleteQuoteByIdHandler,
  },
];

module.exports = routes;
