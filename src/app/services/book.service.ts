import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Book } from '../model/book.model';

@Injectable()
export class BookService {
	constructor(private httpClient:HttpClient) {}

	getDummyBook() {
		return this.httpClient.get('http://localhost:8080/dummy-book');
	}

	getAllBook() {
		return this.httpClient.get('http://localhost:8080/get-all-book');
	}
}