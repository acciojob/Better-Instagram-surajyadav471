//your code here
const divs = document.querySelectorAll('.image');

divs.forEach((div) => {
  div.style.position = 'absolute';
});

let dragStartIndex;

divs.forEach((div, index) => {
  div.addEventListener('dragstart', () => {
    dragStartIndex = index;
  });
});

divs.forEach((div) => {
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});

divs.forEach((div, index) => {
  div.addEventListener('drop', () => {
    let temp = divs[dragStartIndex].style.backgroundImage;
    divs[dragStartIndex].style.backgroundImage = div.style.backgroundImage;
    div.style.backgroundImage = temp;
  });
});