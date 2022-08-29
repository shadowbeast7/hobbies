import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lnk = "";

  // hobbies : any =[];
  hobbies = [{
    Name: "Cricket", fav: 0, desc: "A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.", phoneno: "7723984501"
  }, { Name: "Football", fav: 0, desc: "A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.", phoneno: "8888392019" }, { Name: "Swimming", fav: 0, desc: "A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.", phoneno: "9876543210" }];
  favhobby: any[] = [];

  invalue = "";
  isActive = true;
  col = 2;
  title = 'hobbies';
  data: any;



  addhobby(data: any) {
    let obj = { Name: data, fav: 0, desc: data, phoneno: data };
    this.hobbies.unshift(obj);
  }

  test($event: any) {
    console.log($event.target.value);
    this.invalue = $event.target.value;
  }
  test1($event: any) {
    console.log(this.data);

  }
  // addhobby(newValue:any){

  //   this.hobbies.push(newValue);
  //   console.log(this.hobbies);

  // }

  updatelnk(data: string) {
    this.lnk = data;
  }
  delhobby($event: any) {
    this.hobbies.splice($event, 1);

  }
  addtofav($event: any) {
    this.hobbies[$event].fav = 1;
    this.favhobby.push(this.hobbies.filter(item => item.fav == 1)[0]);

    this.delhobby($event);

  }
  unfav($event: any) {
    this.favhobby[$event].fav = 0;
    console.log(this.favhobby);
    this.hobbies.unshift(this.favhobby.filter(item => item.fav == 0)[0]);
    console.log(this.hobbies);
    this.favhobby.splice($event, 1);



  }
}
