import { Component, OnInit, Input } from '@angular/core';
import { Shelf } from '../../model/shelf.model';

@Component({
  selector: 'app-shelf-detail',
  templateUrl: './shelf-detail.component.html',
  styleUrls: ['./shelf-detail.component.css']
})
export class ShelfDetailComponent implements OnInit {

  @Input() shelf: Shelf;

  constructor() { }

  ngOnInit() {
  }

}
