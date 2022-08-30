import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { AddhobbyComponent } from './components/addhobby/addhobby.component';
import { MyfavComponent } from './components/myfav/myfav.component';
import { MypipePipe } from './pipes/mypipe.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { MydirDirective } from './directives/mydir.directive';
import { PhoneDirective } from './directives/phone.directive';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HobbyComponent,
    AddhobbyComponent,
    MyfavComponent,
    MypipePipe,
    PhoneFormatPipe,
    MydirDirective,
    PhoneDirective,
    ContactusComponent,
    UserComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
