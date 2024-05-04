/** @format */

const { nanoid } = require("nanoid");
const quotes = require("./quotes");

const addQuoteHandler = (request, h) => {
  const { character, movie, quote } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  // data yang dibutuhkan dikumpulkan
  const newQuote = {
    character,
    movie,
    quote,
    id,
    createdAt,
    updatedAt,
  };

  // data di push ke buffer
  quotes.push(newQuote);

  // check bila data sudah masuk ke buffer
  const isSuccess = quotes.filter((quote) => quote.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Quote berhasil ditambahkan",
      data: {
        quoteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Quote gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAllQuotesHandler = () => ({
  status: "success",
  data: {
    quotes,
  },
});

const getAllQuotesByIdHandler = (request, h) => {
  const { id } = request.params;
  const quote = quotes.filter((q) => q.id === id)[0];
  if (quote !== undefined) {
    return {
      status: "success",
      data: {
        quote,
      },
    };
  }
  const response = h.response({
    status: "fail",
    message: "Quote tidak ditemukan",
  });
  response.code(404);
  return response;
};

const editQuoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { character, movie, quote } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = quotes.findIndex((quote) => quote.id === id);
  if (index !== -1) {
    quotes[index] = {
      ...quotes[index],
      character,
      movie,
      quote,
      updatedAt,
    };

    const response = h.response({
      status: "success",
      message: "Quotes berhasil ditambahkan",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui quotes. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

const deleteQuoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = quotes.findIndex((quote) => quote.id === id);
  if (index !== -1) {
    quotes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Quote berhasil dihapus",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Quote gagal dihapus. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = {
  addQuoteHandler,
  getAllQuotesHandler,
  getAllQuotesByIdHandler,
  editQuoteByIdHandler,
  deleteQuoteByIdHandler,
};
