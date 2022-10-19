import render from './render';
let activeKoala;

// Changes the active koala, then re-renders the page to display that koala
let selectKoala = koala => {
  activeKoala = koala
  render(activeKoala)
}

export default selectKoala;