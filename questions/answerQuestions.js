const { getLocation } = require("../methods/getLocation");
const { getSearchBooks } = require("../methods/getSearchBooks");

function answerQuestions(ctx) {
  let text = ctx.message.text;
  if (text.includes("manzil" || "Manzil" || "MANZIL")) {
    return getLocation(ctx);
  } else if (text.includes("kitobi bormi")) {
    return getSearchBooks(ctx);
  }
}

module.exports = { answerQuestions };
