import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router) { }

  user(data:any){
    console.log(data);
  }

  // btnClick = function() {
  //   this.router.navigateByUrl('/user');

  // };

  

}
