const shoppingList = [];

let listElem = document.querySelector(".lista");
console.log(listElem);
let sndBtn = document.querySelector(".aggiungi")
let newElem = document.querySelector("#new-element")
console.log(newElem);

sndBtn.addEventListener("click", function (){
    shoppingList.push(newElem.value);
    console.log(shoppingList);
    newElem.value = "";

    let i = 0;
    let result = "";
    while (i < shoppingList.length) {
        result += `<li><input type="checkbox" id="check${i}"><label for="check${i}">${shoppingList[i]}</label></li>`
        i++;
    }
    console.log(result);
    listElem.innerHTML = result
})


