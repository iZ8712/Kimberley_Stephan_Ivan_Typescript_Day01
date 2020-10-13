let numArray: number[] = [1,2,3,4,5,6,7,8,9,10];

for(let number of numArray){
	for (let number2 of numArray) {
		document.write(`${number}X${number2} = ` + number*number2 + `<br>`);
	}
}