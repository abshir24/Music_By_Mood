import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'app/connector.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private _connector:ConnectorService){ 
    console.log("component")
    this._connector.getWeather('seattle')
  }

  ngOnInit() {
  }

}
