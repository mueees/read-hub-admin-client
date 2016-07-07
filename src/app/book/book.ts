export class Book {
    id:string;
    title:string;
    price:number;

    constructor(book:any) {
        this.id = book.id;
        this.title = book.title;
        this.price = book.price;
    }
}