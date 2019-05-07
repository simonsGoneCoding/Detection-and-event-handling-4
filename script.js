// Color generated depending on a spot that we click on 
// if values for x (event.clientX) and y (event.clientY) are even (ex. 100,122) than red color
// if values x and y are odd, than blue
// if one value is odd and another even than color green.

window.addEventListener('click', (e) => {
  if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
    document.body.style.backgroundColor = 'red';
  } else if (e.clientX % 2 != 0 && e.clientY % 2 != 0) {
    document.body.style.backgroundColor = 'blue';
  } else if ((e.clientX % 2 != 0 && e.clientY % 2 === 0) || (e.clientX % 2 === 0 && e.clientY % 2 === 0)) {
    document.body.style.backgroundColor = 'green'
  }
})