import renderActiveKoala from './image-large';
import renderKoalaList from './list';
import { koalas } from './koalas.js'

// Called once when the page loads, and again every time a koala is selected
let render = (activeKoala) => {
  let oldPage = document.querySelector('.koala-container')
  let newPage;
  if (activeKoala) {
    newPage = renderActiveKoala(activeKoala)
  } else {
    newPage = renderKoalaList(koalas)
  }
  newPage.classList.add('koala-container')
  oldPage.replaceWith(newPage)
}
export default render;