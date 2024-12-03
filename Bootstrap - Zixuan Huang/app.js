function scrollToArticle(a) {
  const element = document.getElementById(a);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}