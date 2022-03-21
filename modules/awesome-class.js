export default class Awesome {
  constructor() {
    this.books = [];
    this.newBooks = [];
  }

  add(data) {
    const temp = [];
    temp.push(data);
    this.books = temp;
  }

  addBook(data) {
    const temp = [];
    temp.push(data);
    this.newBooks = temp;
  }

  delete(number) {
    this.books.splice(number, 1);
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let k = 0; k < this.books.length; k += 1) {
      window.localStorage.setItem(k.toString(), JSON.stringify(this.books[k]));
    }
    window.location.reload();
  }

  displayObject(number) {
    return ` 
    <div class="container"> 
      <div class="title">${this.books[number].title}</div>
      <div class="by">by</div>
      <div class="author">${this.books[number].author}</div>
      <button type="button" class="remove">Remove</button>
    </div>
    `;
  }
}
