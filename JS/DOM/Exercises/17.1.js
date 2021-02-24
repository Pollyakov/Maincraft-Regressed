const text = document.querySelector('p');
const increase = document.querySelector('[data-plus]');
const decrease = document.querySelector('[data-minus]');

let fontSize = parseInt(window.getComputedStyle(text).fontSize);
console.dir(text);
increase.addEventListener('click', () => {
  if (fontSize < 100) {
    fontSize += 2;
    text.style.fontSize = `${fontSize}px`;
  }
});
decrease.addEventListener('click', () => {
  if (fontSize > 6) {
    fontSize -= 2;
    text.style.fontSize = `${fontSize}px`;
  }
});