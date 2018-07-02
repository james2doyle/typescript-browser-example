import logger from "./module";

document.addEventListener('DOMContentLoaded', () : void => {
  const el : HTMLElement = document.getElementById('output');
  if (el) {
    el.innerHTML += `${navigator.userAgent}`;
  }
  const listItems : NodeListOf<HTMLLIElement> = document.querySelectorAll('li');
  if (listItems.length > 0) {
    Array.from(listItems)
      .forEach((item : HTMLLIElement) => {
        item.classList.add(`item-${item.innerText.split(' ').pop()}`);
      });
  }
  logger().then(() : void => {
    console.log('then, back in the DCL function');
  });
});