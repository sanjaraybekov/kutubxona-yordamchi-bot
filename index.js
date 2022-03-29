const { Telegraf } = require("telegraf");
const { getLocation } = require("./methods/getLocation");
const { getSearchBooks } = require("./methods/getSearchBooks");
const { answerQuestions } = require("./questions/answerQuestions");

const bot = new Telegraf("5109211047:AAHPrVD4aDfngl6UrIcI8n-oTxyJHgMNYvc");

bot
  .start((ctx) => {
    return bot.telegram.sendMessage(
      ctx.chat.id,
      `Assalomu Aleykum ${ctx.from.first_name}! Botdan qanday foydalanishni bilish uchun /help 👈ni bosing`
    );
  })
  .help((ctx) => {
    return ctx.reply(
      "Kutubxona manzilini ko'rish uchun 'manzil' so'zini yuboring\nKitob qidirish uchun '(Kitob nomi) kitobi bormi' deb yuboring\n"
    );
  })

  .on(`text`, (ctx) => {
    return answerQuestions(ctx);
  });

bot.launch();
