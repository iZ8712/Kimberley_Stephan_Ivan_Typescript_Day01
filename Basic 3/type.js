var array = ["Ivan", "Zivanovic", "BA"];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var array = ["Ivan", "Zivanovic", "BA"];
array.forEach(function (value) {
    console.log(value[0]);
});
var items = ['item1', 'item2', 'item3'];
var copy = [];
// Vorher
for (var i = 0; i < items.length; i++) {
    copy.push(items[i]);
}
// Nachher
items.forEach(function (item) {
    copy.push(item);
    console.log(copy);
});
