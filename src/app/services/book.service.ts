import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Book } from '../model/book.model';

@Injectable()
export class BookService {
	constructor(private httpClient:HttpClient) {}
	baseUrl = 'http://localhost:8080/';
	getDummyBook() {
		return this.httpClient.get(this.baseUrl + 'dummy-book');
	}

	getAllBook() {
		return this.httpClient.get<Book[]>(this.baseUrl + 'get-all-book');
	}
}