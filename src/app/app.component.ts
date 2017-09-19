import { Component, OnInit } from '@angular/core';
import { MarvelApiService  } from './marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  heroInfo: object;


  constructor(private MarvelApiService: MarvelApiService ){}

  getDataFromService(){
    this.MarvelApiService.getHeroInfo()
      .subscribe(
        heroInfo => {
          this.heroInfo = heroInfo.data.results;
        }
      )
  }

  getSearchURL(addSearchTerm){
    this.MarvelApiService.getHeroSearch(addSearchTerm)
    .subscribe(
      heroInfo => {
        this.heroInfo = heroInfo.data.results;
      }
    )
  }
  ngOnInit(){
    this.getDataFromService();
  }
}
