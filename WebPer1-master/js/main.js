// Seuraava on harjoittelu
"use strict";
/*
const testi = document.querySelector('#testi');
// console.log(testi);
testi.innerHTML = "Klikkaa tästä";

const piilotaElementti = (evt) => {
  console.log(evt);
  evt.target.setAttribute('class', 'hidden');
};

testi.addEventListener('click', piilotaElementti);

const esimKappaleet = document.querySelectorAll('.esim');
console.log(esimKappaleet);

esimKappaleet[0].innerHTML = 'Eka kappale';
esimKappaleet[1].innerHTML = 'Toka kappale';

// ---------------------------------------------------
*/
// teht B
 let lomakeOK = '';


const checkAttribute = (attr, elements, func) => {
  elements.forEach( (el) => {
  if (el.hasAttribute(attr)){
     func(el);
   }
  });
};

const checkEmpty = (el) => {
  // console.log(el);
   if (el.value === '') {
     //el.style = 'border: 1px solid red';
     el.setAttribute('style', 'border: 1px solid red');
     lomakeOK += '0';
   } else {
     el.setAttribute('style', '');
     lomakeOK += '1';
   }
};

const checkPattern = (el) => {
  //vanhemmissa selaimissa attribuutit haetaan getAttributella
  console.log(el.getAttribute('pattern'));
  //uudemmissa attributen nimellä
  console.log(el.pattern);
  const pat = el.getAttribute('pattern');
  const lauseke = new RegExp(pat, 'i');
  if (!lauseke.exec(el.value)) {
     console.log('no');
     el.setAttribute('style', 'border: 1px solid yellow');
     lomakeOK += '0';
  } else {
    console.log('yes');
    el.setAttribute('style', '');
    lomakeOK += '1'
  }
};

const inputElementit = document.querySelectorAll('input');

const lomake = document.querySelector('form');

lomake.addEventListener('submit', (evt) => {
  evt.preventDefault();
  lomakeOK = '';
  checkAttribute('required', inputElementit, checkEmpty);
  checkAttribute('pattern', inputElementit, checkPattern);
  // tarkistetaan onko nollia
 // console.log(lomakeOK);
  const lauseke = new RegExp('0');
  if (!lauseke.exec(lomakeOK)) {
    lomake.submit();
  }
});

/*const checkPattern = (el) => {
    console.log(el);
  if (el.value === '') {
    //el.style = 'border: 1px solid red';
    el.setAttribute('style', 'border: 1px solid red');
    lomakeOK += '0';
  } else {
    el.setAttribute('style', '');
    lomakeOK += '1';
  }
}; */