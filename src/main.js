"use strict";

let phone_model = [
  {
    ratingRevievs: "264 отзыва",
    price: { oldUan: "4 333 грн", newUan: "3 799 грн" },
    name: "Motorola MOTO G4 (XT1622) Black"
  },
  {
    ratingRevievs: "1355 отзывов",
    price: "4 999 грн",
    name:
      "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"
  },
  {
    ratingRevievs: "426 отзывов",
    price: "5 199 грн",
    name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"
  }
];

function sortByReviews(arr) {
  arr.sort((a, b) => {
    let reviewsA = +a.ratingRevievs.split(" ")[0];
    let reviewsB = +b.ratingRevievs.split(" ")[0];

    if (reviewsA < reviewsB) {
      return -1;
    }

    if (reviewsA > reviewsB) {
      return 1;
    }

    return 0;
  })
};

sortByReviews(phone_model);
console.log(phone_model);
