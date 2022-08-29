import { Directive,HostListener,ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {
  

  @Input() appMydir:any;
 
  constructor(private el:ElementRef) {}
   


  
    @HostListener('keypress') keypress(){
      let val:string = this.el.nativeElement.value;
      this.el.nativeElement.value = val.split('').reverse().join('');

  // @HostListener('keypress') keypress(){
  //   let val:string = this.el.nativeElement.value;
  //   this.el.nativeElement.value = val.toUpperCase();




    // if (this.appMydir=="uppercase")
    // this.el.nativeElement.value = val.toUpperCase();
    // else
    // this.el.nativeElement.value = val.toLocaleLowerCase();
  
  }

}
