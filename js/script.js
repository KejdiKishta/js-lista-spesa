const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

let listElem = document.querySelector(".lista");
console.log(listElem);


let i = 0;
let result = "";
while (i < shoppingList.length) {
    result += `<li>${shoppingList[i]}</li>`
    i++;
}
console.log(result);
listElem.innerHTML = result