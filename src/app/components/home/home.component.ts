import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() msg:string = "hobby";
  @Input() hobbylist:any[] = [];
  @Output() newhobby = new EventEmitter;
  @Output() remhobby = new EventEmitter;
  @Output() addfav = new EventEmitter;
  @Input() myfav:any[]=[];
  @Output() uhfav = new EventEmitter;
 
  constructor() { }
  addnewhobby($event:any){
    this.newhobby.emit($event);
  }
  delhobby($event:any){
    this.remhobby.emit($event);
  }
  addtofav($event:any){
    this.addfav.emit($event);
    
  }
  unfavh($event:any){
    this.uhfav.emit($event);
    console.log($event);
    
  }
  

  

}
