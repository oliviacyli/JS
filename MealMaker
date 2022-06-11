const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (priceToCheck === number) {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

specialMeals = ['fettucine alfredo', 'lasagne', 'steak frites']

menu._meal = specialMeals[Math.floor(Math.random() * 2)];
menu._price = 6.99;
console.log(menu.todaysSpecial);

