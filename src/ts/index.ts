import logger from "./module";

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('output');
  if (el) {
    el.innerHTML += `${navigator.userAgent}`;
  }
  const listItems = document.querySelectorAll('li');
  if (listItems.length > 0) {
    Array.from(listItems)
      .forEach(item => {
        item.classList.add(`item-${item.innerText.split(' ').pop()}`);
      });
  }
  logger().then(() => {
    console.log('then, back in the DCL function');
  });
});