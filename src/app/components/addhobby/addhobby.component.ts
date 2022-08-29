import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
  
  @Output() mynewhobby = new EventEmitter;
  // @Input() myhobby:any[]=[];

  constructor() { }
  addhobby(data:String){
    this.mynewhobby.emit(data);
    
  }

  

}
