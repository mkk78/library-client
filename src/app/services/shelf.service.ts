import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})  
export class ShelfService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8080/';

  getAllShelves() {
  	return this.httpClient.get(this.baseUrl + 'get-all-shelves');
  }

  getShelfById(id: number) {
  	return this.httpClient.get(this.baseUrl + 'get-shelf?id='+id);
  }

  addBook(bookId: number, shelfId: number) {
  	return this.httpClient.get(this.baseUrl + 'add-book?bookid='+bookId+'&shelfid='+shelfId);
  }

  removeBook(bookId: number, shelfId: number) {
  	return this.httpClient.get(this.baseUrl + 'remove-book?bookid='+bookId+'&shelfid='+shelfId);
  }
}
