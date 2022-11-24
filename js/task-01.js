const numberOfCategories = document.querySelectorAll("ul#categories>li.item");
console.log("Numbers of categories:", (numberOfCategories.length));

const ul = Array.from(document.querySelector("#categories").children);
for (let elem of ul) {
   let category = elem.firstElementChild.textContent;
   let quantityElem = elem.lastElementChild.children.length;
   console.log("Categories:", category, '\n', "Elements:", quantityElem);
}

