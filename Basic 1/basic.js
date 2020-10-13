var numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numArray1_1 = numArray1; _i < numArray1_1.length; _i++) {
    var number = numArray1_1[_i];
    for (var _a = 0, numArray2_1 = numArray2; _a < numArray2_1.length; _a++) {
        var number2 = numArray2_1[_a];
        document.write(number + "X" + number2 + " = ", number * number2 + "<br>");
    }
}
