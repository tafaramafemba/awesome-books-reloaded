import Awesome from './modules/awesome-class.js';
import { DateTime } from './modules/luxon.js';

const booksSection = document.querySelector('.books');

const awesome = new Awesome();

awesome.add({ title: 'Chronicles of Narnia', author: 'C.S Lewis' });

if (window.localStorage.getItem('bookArray') !== null) {
  const array = JSON.parse(window.localStorage.getItem('bookArray'));
  for (let m = 0; m < array.length; m += 1) {
    awesome.newBooks[m] = JSON.parse(window.localStorage.getItem(m.toString()));
  }
  awesome.books = awesome.newBooks;
}

for (let i = 0; i < awesome.books.length; i += 1) {
  const newElement = document.createElement('section');
  newElement.innerHTML = awesome.displayObject(i);
  booksSection.appendChild(newElement);
}

for (let j = 0; j < awesome.books.length; j += 1) {
  const removeButton = document.querySelectorAll('.remove');
  removeButton[j].addEventListener('click', () => { awesome.delete(j); });
}

const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const add = document.getElementById('add');
const newBook = {
  title: '',
  author: '',
};

add.addEventListener('click', () => {
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;

  awesome.books[awesome.books.length] = newBook;

  window.localStorage.setItem('bookArray', JSON.stringify(awesome.books));
  for (let k = 0; k < awesome.books.length; k += 1) {
    window.localStorage.setItem(k.toString(), JSON.stringify(awesome.books[k]));
  }
});

window.localStorage.clear();

window.localStorage.setItem('bookArray', JSON.stringify(awesome.books));
for (let k = 0; k < awesome.books.length; k += 1) {
  window.localStorage.setItem(k.toString(), JSON.stringify(awesome.books[k]));
}

const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.querySelector('.date').innerHTML = dt;

const list = document.querySelector('.list');
const addNew = document.querySelector('.addNew');
const contact = document.querySelector('.contact');
const listOfBooks = document.querySelector('.listOfBooks');
const mainPage = document.querySelector('.mainPage');
const contactInfo = document.querySelector('.contactInfo');

window.addEventListener('load', () => {
  listOfBooks.classList.remove('hidden');
  mainPage.classList.add('hidden');
  contactInfo.classList.add('hidden');
});

list.addEventListener('click', () => {
  listOfBooks.classList.remove('hidden');
  mainPage.classList.add('hidden');
  contactInfo.classList.add('hidden');
});

addNew.addEventListener('click', () => {
  mainPage.classList.remove('hidden');
  contactInfo.classList.add('hidden');
  listOfBooks.classList.add('hidden');
});

contact.addEventListener('click', () => {
  contactInfo.classList.remove('hidden');
  listOfBooks.classList.add('hidden');
  mainPage.classList.add('hidden');
});
