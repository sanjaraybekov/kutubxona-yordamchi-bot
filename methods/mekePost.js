const makePost = (book) => {
  let stocks = book.stocks;

  //   function groupBy(list, keyGetter) {
  //     const map = {};
  //     list.forEach((item) => {
  //       const key = keyGetter(item);
  //       const collection = map[key];
  //       if (!collection) {
  //         map[key] = [item];
  //       } else {
  //         collection.push(item);
  //       }
  //     });
  //     return map;
  //   }
  //   let groupedByDate;
  //   if (busyBooks) {
  //     groupedByDate = Object.entries(
  //       groupBy(busyBooks, (item) => item.returningDate.slice(0, 10))
  //     );
  //   }

  return `\nKitob nomi: ${book.name}\nUmumiy kitoblar soni: ${
    stocks.length
  } ta\nKitob holati: ${
    stocks.every((busy) => busy.busy === true) ? `BAND` : `BO'SH`
  }\n${book.image ? `Rasm: ${book.image}` : ``}\n`;
};

module.exports = { makePost };
