const { bot } = require("../constants/const");

const getLocation = () => {
  return bot.telegram.sendLocation(-1001718670724, "41.3217688", "69.237796");
};

//977466424; sarvar

module.exports = { getLocation };
