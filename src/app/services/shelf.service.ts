import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  constructor(private httpClient: HttpClient) { }

  getAllShelves() {
  	return this.httpClient.get('http://localhost:8080/get-all-shelves');
  }

  getShelfById(id: number) {
  	return this.httpClient.get('http://localhost:8080/get-shelf?id='+id);
  }

  addBook(bookId: number, shelfId: number) {
  	return this.httpClient.get('http://localhost:8080/add-book?bookid='+bookId+'&shelfid='+shelfId);
  }

  removeBook(bookId: number, shelfId: number) {
  	return this.httpClient.get('http://localhost:8080/remove-book?bookid='+bookId+'&shelfid='+shelfId);
  }
}
