const restaurant: {name: string, openingHours: string, est: number} = {
	name: "Pizza Place",
	openingHours: "12:00 - 24:00",
	est: 1992
};

let guests: string[] = ["Ivan", "Kim", "Stephan"];

let menu: {dish: string, price: number, comment: string, rating: number} = {};

var addToMenu= (a: string,b:number,c:string,d:number) => {
	menu.dish = a;
	menu.price = b;
	menu.comment = c;
	menu.rating = d;
	console.log(menu.dish)
};

/*var pizza = addToMenu("Pizza", 10, "Delish", 5);
var spaghetti = addToMenu("Spaghetti", 8, "Mediocre", 3);*/

for (var i = 0; i < this.menu.length; i++) {
    // merge objects into one with multiple props
    this.menu[i] = Object.assign(this.menu[i], {
        dish: 'Pizza', 
        price: 10, 
        comment: "true", 
        rating:5
    });
}

console.log(menu);