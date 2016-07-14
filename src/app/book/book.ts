export class Book {
    _id:string;
    title:string;
    description:string;

    binding:string;
    cover:string; // image
    language:string;
    pages:number;
    publisher:string;
    create_data:Date;
    published_data:Date;

    quotes:Array<{}>;
    authors:Array<{}>;

    constructor(book:any) {
        if (book._id) {
            this._id = book._id;
        }

        this.title = book.title || '';
        this.description = book.description || '';
        this.cover = book.cover || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
        this.binding = book.binding || 'hard';
        this.language = book.language || 'en';
        this.pages = book.pages || 0;
        this.publisher = book.publisher || '';
        this.create_data = book.create_data || new Date();
        this.published_data = book.published_data || new Date();
        this.authors = book.authors || [{name: ''}];
        this.quotes = book.quotes || [{text: ''}];
    }
}