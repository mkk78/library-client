export class Book {
	public id: number;
	public isbn: string;
	public title: string;
	public author: string;
	public status: boolean;

	constructor(id: number, isbn: string, title: string, author: string, status: boolean) {
		this.id = id;
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.status = status;
	}
}
