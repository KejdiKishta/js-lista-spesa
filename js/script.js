const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

let listElem = document.querySelector(".lista");
console.log(listElem);

let i = 0
while (i < shoppingList.length) {
    console.log(`<li>${shoppingList[i]}</li>`);
    i++;
}