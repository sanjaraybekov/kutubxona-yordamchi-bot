const { Telegraf } = require("telegraf");

const URL_LIBRARY_API = "https://library.softly.uz/api";

const URL_LIBRARY = "https://library.softly.uz";

const bot = new Telegraf("5109211047:AAHPrVD4aDfngl6UrIcI8n-oTxyJHgMNYvc");

module.exports = { URL_LIBRARY_API, URL_LIBRARY, bot };
