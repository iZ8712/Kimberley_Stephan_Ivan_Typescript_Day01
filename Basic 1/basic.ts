let numArray1: number[] = [1,2,3,4,5,6,7,8,9,10];
let numArray2: number[] = [1,2,3,4,5,6,7,8,9,10];

for(let number of numArray1){
	for (let number2 of numArray2) {
		document.write(`${number}X${number2} = `number*number2 + `<br>`);
	}
}