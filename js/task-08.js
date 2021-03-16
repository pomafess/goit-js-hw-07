const boxes = document.getElementById("boxes");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('#controls input');

renderBtn.addEventListener("click", function (
    ) {createBoxes(input.value)});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let firstDivWidth = 30;
    let firstDivHeight = 30;
    let newArray = [];
    for (let i = 1; i <= amount; i += 1){
        const divEl = document.createElement("div")
        divEl.style.width = `${firstDivWidth}px`;
        divEl.style.height = `${firstDivHeight}px`;
        firstDivWidth += 10;
        firstDivHeight += 10;
        divEl.style.background = `rgba(${random()} , ${random()} ,${random()})`;
        newArray.push(divEl)
    }
    boxes.append(...newArray)    
}
function destroyBoxes() {
    boxes.innerHTML = ""
}
function random() {
    return Math.floor(Math.random() * 256)
}












// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.