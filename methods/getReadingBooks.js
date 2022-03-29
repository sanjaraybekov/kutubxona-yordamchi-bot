const { default: axios } = require("axios");
const { URL_LIBRARY_API } = require("../constants/const");
const getReadingBooks = (id) => {
  return axios.get(`${URL_LIBRARY_API}/app/books/${id}/statuses?locationId=1`);
};

module.exports = { getReadingBooks };
