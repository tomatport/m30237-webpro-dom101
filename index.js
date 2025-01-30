/* eslint-disable no-unused-vars */

/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem, str) {
  elem.innerHTML = str;
}

function addTextTo(elem, str) {
  elem.innerHTML = `${elem.innerHTML}${str}`;
}

function moreBears() {
  document.getElementById('animals').src = 'http://placebear.com/400/200';
  document.getElementById('animals').alt = 'A bear.';
  document.getElementById('animals').title = 'A BEAR!';
}

function setId(elem, str) {
  elem.id = str;
  return elem;
}

function setClass(elem, str) {
  elem.classList = str;
  return elem;
}

function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

function newElement(name) {
  return document.createElement(name);
}

function findElementById(id) {
  return document.getElementById(id);
}
