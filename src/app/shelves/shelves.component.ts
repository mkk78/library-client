import { Component, OnInit } from '@angular/core';
import { Shelf } from '../model/shelf.model';
import { ShelfService } from '../services/shelf.service';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css']
})
export class ShelvesComponent implements OnInit {

  shelves: Shelf[] = [];

  selectedShelf: Shelf;

  constructor(private shelfService: ShelfService) { }

  ngOnInit() {
  	this.onGetAllShelves();
  }

  onGetAllShelves() {
  	this.shelfService.getAllShelves()
  	.subscribe(
  		(data: any[]) => {
  			this.shelves = data;
  		},
  		(error) => console.log(error)
  	);
  }

  onAddBook() {
  	this.shelfService.addBook(11, 1)
  	.subscribe(
  		(data: any[]) => {
  			this.shelves = data;
  		},
  		(error) => console.log(error)
  	);
  }

  onRemoveBook() {
  	this.shelfService.removeBook(11,1)
  	.subscribe(
  		(data: any[]) => {
  			this.shelves = data;
  		},
  		(error) => console.log(error));
  }

}
