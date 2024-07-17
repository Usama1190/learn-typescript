type Author = {
    fname: string;
    lname: string;
}

type Book = {
    author: Author;
    name: string;
}

const myBook: Book = {
    author: {
        fname: 'Usama',
        lname: 'Israr'
    },
    name: 'My Best Book'
}