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

// 1. Replace the content of a given element to something else
function replaceText(elem, str) {
  elem.innerHTML = str;
}

// 2. Append to the content of an element
function addTextTo(elem, str) {
  elem.innerHTML = `${elem.innerHTML}${str}`;
}

// 3. Change the img#animals to an image of a bear, with appropriate alt text
function moreBears() {
  document.querySelector('#animals').src = 'http://placebear.com/400/200';
  document.querySelector('#animals').alt = 'A bear.';
  document.querySelector('#animals').title = 'A BEAR!';
}

// 4. Set the ID of a given element, replacing its current ID
function setId(elem, str) {
  elem.id = str;
  return elem;
}

// 5. Set the class of a given element, overwriting all previous classes
function setClass(elem, str) {
  elem.classList = str;
  return elem;
}

// 6. Add a class to an element, keeping previous classes
function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

// 7. Remove a class from an element, keeping other classes
function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

// 8. Create a new element with a given tag name
function newElement(name) {
  return document.createElement(name);
}

// 9. Find an element by its ID
function findElementById(id) {
  return document.querySelector(`#${id}`);
}

// 10. Find multiple elements using a query selector
function findElementsByQuery(query) {
  return document.querySelectorAll(query);
}

// 11. Reverse a <ul> or <ol> list
function reverseList(query) {
  const listElem = document.querySelector(query);

  for (const li of listElem.children) {
    listElem.prepend(li);
  }

  return listElem;
}

// 12. Move one element to another parent
function mover(moveThis, appendToThis) {
  const toMove = document.querySelector(moveThis);
  const moveTo = document.querySelector(appendToThis);
  moveTo.appendChild(toMove);
}

// 13. From an array of strings, add them as list items to a given list element
function filler(list, candidates) {
  for (const c of candidates) {
    const newElem = document.createElement('li');
    newElem.innerText = c;
    list.appendChild(newElem);
  }
}

// 14. Duplicate an element and its children, keeping parent
function dupe(selector) {
  const elem = document.querySelector(selector);
  elem.parentElement.appendChild(elem.cloneNode(true));
}

// 15. Remove all elements with a given selector
function removeAll(selector) {
  for (const elem of document.querySelectorAll(selector)) {
    elem.remove();
  }
}

// 16. Return an object from three input fields
function getUserData() {
  const name = document.querySelector('input#username').value;
  const speed = document.querySelector('input#speed').valueAsNumber;
  // this checkbox is sticky, sometimes the browser caches the state so the test fails. ctrl+f5 fixes.
  const student = document.querySelector('input#student').checked;

  return { name, speed, student };
}
