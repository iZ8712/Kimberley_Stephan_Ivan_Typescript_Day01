const restaurant: {name: string, openingHours: string, est: number} = {
	name: "Pizza Place",
	openingHours: "12:00 - 24:00",
	est: 1992
};

let guests: string[] = ["Ivan", "Kim", "Stephan"];

let menu: {dish: string, price: number, comment: string, rating: number} = [{

}];

menu[0] = {dish: "Pizza", price: 10, comment: "string", rating: 5};
menu[1] = {dish: "Spaghetti", price: 8, comment: "bla", rating: 3};

console.log(menu[0]);
console.log(menu[1]);

console.table(menu);

/*addToMenu= (a: string,b:number,c:string,d:number) => {

	menu[i].dish = a;
	menu.price = b;
	menu.comment = c;
	menu.rating = d;
	console.log(menu.dish)
}*/

/*menu.dish = "Pizza";
menu.dish += "Spaghetti";

console.log(menu);*/

/*var 
};*/

/*var pizza = addToMenu("Pizza", 10, "Delish", 5);
var spaghetti = addToMenu("Spaghetti", 8, "Mediocre", 3);*/

/*for (var i = 0; i < this.menu.length; i++) {
    // merge objects into one with multiple props
    this.menu[i] = Object.assign(this.menu[i], {
        dish: 'Pizza', 
        price: 10, 
        comment: "true", 
        rating:5
    });
}

console.log(menu);*/
