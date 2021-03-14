const categories = document.querySelectorAll("#categories .item");
console.log(`В списке ${categories.length} категории.`)
/////1 ВАРИАНТ
for (const item of categories) {
    console.log(`Категория: ${item.firstElementChild.textContent} Количество элементов: ${item.lastElementChild.children.length}`)
}
/////2 ВАРИАНТ
for (const item of categories) {
    const titleElem = item.querySelector("h2")
    // console.log(titleElem)
    const totalItem = item.querySelectorAll("ul li")
    // console.log(totalItem)
    console.log(`Категория: ${titleElem.textContent} Количество элементов: ${totalItem.length}`)
}

