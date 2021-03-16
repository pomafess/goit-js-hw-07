const input = document.querySelector('#validation-input');
const dataLength = +input.dataset.length;

input.addEventListener("blur", onInputCheck)
function onInputCheck() {
input.value.length === dataLength ? input.classList.add('valid') : input.classList.add('invalid')
}
input.addEventListener("input", onInputChange)
function onInputChange() {
input.classList.remove('valid', 'invalid')
}