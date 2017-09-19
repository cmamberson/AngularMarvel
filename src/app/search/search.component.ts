import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchTerm;
addTerm;

@Output() addSearchTerm = new EventEmitter<object>();
@Output() refresh = new EventEmitter<object>();


  constructor() { }

  ngOnInit() {
  }

  submitClick(searchTerm){
    this.searchTerm = searchTerm;
    this.addTerm = "&nameStartsWith=" + searchTerm;
    this.addSearchTerm.emit(this.addTerm);
    this.searchTerm = "";
  }

  refreshPage(){
    this.refresh.emit();
  }


}
