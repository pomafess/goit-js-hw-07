const inputName = document.querySelector('#name-input')
const nameLabel = document.querySelector('#name-output')
inputName.addEventListener("input", onInputChange)
function onInputChange() {
    if (inputName.value !== "") {
        nameLabel.textContent = this.value;
    } else {nameLabel.textContent = "незнакомец"};
}