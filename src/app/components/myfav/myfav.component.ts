import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myfav',
  templateUrl: './myfav.component.html',
  styleUrls: ['./myfav.component.css']
})
export class MyfavComponent {
  @Input() myhobby:any[] = [];
  @Output() ufav = new EventEmitter;


  constructor() { }

  unfav(data:number){
    this.ufav.emit(data);
    console.log(data);
    
  }


  

}
