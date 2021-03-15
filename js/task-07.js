const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
input.addEventListener("input", onInputRange);
function onInputRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}