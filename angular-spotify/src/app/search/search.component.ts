import { Component, OnInit } from '@angular/core';
import { SearchService } from 'app/search.service';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputField: FormControl = new FormControl();
  searchResults:any[] = [];
  constructor(private _search: SearchService) { }

  ngOnInit(){
    this.inputField.valueChanges
      .subscribe(inputField => this._search.searchArtists(inputField)
          .subscribe(result =>{
            if(result.status === 400){return;}
            else{this.searchResults=result.artists.items}
          })
      )  
  }

}
