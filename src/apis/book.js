export const list = () => {
    return JSON.parse(localStorage.getItem('books') || '[]');
}

export const get = (id) => {
    return list().find(book => Number(book.id) === Number(id));
}

export const add = (book) => {
    let id = 1;
    const books = list();
    if(books.length > 0) {
        id = Number(books[books.length - 1].id) + 1;
    }
    const newBooks = [...books, {...book, id}];
    localStorage.setItem('books', JSON.stringify(newBooks));
}

export const update = (book) => {
    const books = list().map(currentBook => Number(currentBook.id) === Number(book.id) ? book: currentBook);
    localStorage.setItem('books', JSON.stringify(books));
}

export const remove = (id) => {
    const books = list().filter(book => Number(book.id) !== Number(id));
    localStorage.setItem('books', JSON.stringify(books));
}
