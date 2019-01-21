import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})



export class BookComponent implements OnInit {

  constructor(private bookService: BookService) {}
  books: Book[] = [];


  ngOnInit() {
    this.onGetAllBook();
  }

  onGetDummyBook() {
  	this.bookService.getDummyBook()
  	.subscribe(
  		(response) => console.log(response),
  		(error) => console.log(error)
  		);
  }

  onGetAllBook() {
  	this.bookService.getAllBook()
  	.subscribe(
  		(data: any[]) => {
  			this.books = data;
  		},
  		(error) => console.log(error)
  		);
  }

}
