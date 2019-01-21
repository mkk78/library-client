import { Book } from './book.model';

export class Shelf {
	public shelfId: number;
	public maxCapacity: number;
	public currentCapacity: number;
	public books: Book[];

	constructor(shelfId: number, maxCapacity: number, currentCapacity: number, books: Book[]) {
		this.shelfId = shelfId;
		this.maxCapacity = maxCapacity;
		this.currentCapacity = currentCapacity;
		this.books = books;
	}
}
