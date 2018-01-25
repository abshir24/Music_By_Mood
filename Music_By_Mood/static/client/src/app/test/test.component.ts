import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'app/connector.service';
import { Emotion } from 'app/emotion';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  emotion = ''

  constructor(private _connector:ConnectorService){ }

  ngOnInit() {
  }

  userEmotion(){
    console.log(this.emotion)
    this._connector.getMusic(this.emotion)
    this.emotion = ''
  }

}
