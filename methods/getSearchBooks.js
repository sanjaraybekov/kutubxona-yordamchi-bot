const { default: axios } = require("axios");
const { URL_LIBRARY_API } = require("../constants/const");
const { makePost } = require("./mekePost");

const getSearchBooks = async (ctx) => {
  const bookName = ctx.message.text.split(" ")[0];

  let result = [];

  await axios(`${URL_LIBRARY_API}/app/books?q=${bookName}`).then((res) => {
    result = res.data.items;
  });

  return ctx.reply(
    `🔍 Qidiruv natijasi\n${result.map((item) => makePost(item))}`
  );
};

module.exports = { getSearchBooks };
