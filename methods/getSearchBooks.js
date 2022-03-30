const { default: axios } = require("axios");
const { URL_LIBRARY_API, bot } = require("../constants/const");
const { makePost } = require("./mekePost");

const getSearchBooks = async (ctx) => {
  const bookName = ctx.message.text.split(" ")[0];

  let result = [];

  await axios(`${URL_LIBRARY_API}/app/books?q=${bookName}`).then((res) => {
    result = res.data.items;
  });

  return bot.telegram.sendMessage(
    -1001718670724,
    `🔍 Qidiruv natijasi\n${result.map((item) => makePost(item))}`
  );
};

module.exports = { getSearchBooks };
