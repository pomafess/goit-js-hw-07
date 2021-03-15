const refs = {
  incrementBtn: document.querySelector("[data-action='increment']"),
  decrementBtn: document.querySelector("[data-action='decrement']"),
  counter: document.querySelector('#value'),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  refs.counter.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
};
refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);