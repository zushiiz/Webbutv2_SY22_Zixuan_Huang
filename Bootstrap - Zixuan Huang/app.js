function scrollToArticle(a) {
  const element = document.getElementById(a);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

const element = document.getElementById('raccoon');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
  if (element.classList.contains('spin1')) {
    element.classList.remove('spin1');
    element.classList.add('spin2');
  } else if (element.classList.contains('spin2')) {
    element.classList.remove('spin2');
    element.classList.add('spin3');
  }
  else{
    element.classList.remove('spin3');
    element.classList.add('spin1');
  }
});