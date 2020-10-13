var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
    var number = numArray_1[_i];
    for (var _a = 0, numArray_2 = numArray; _a < numArray_2.length; _a++) {
        var number2 = numArray_2[_a];
        document.write(number + "X" + number2 + " = " + number * number2 + "<br>");
    }
}
