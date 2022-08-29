import { Directive } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor() { }

  // @HostListener('click') click(){
    
  //   let rawNum:string = this.el.nativeElement.value;
  //   rawNum = "+1"+ rawNum;
  
  //     const countryCodeStr = rawNum.slice(0,2);
  //     const areaCodeStr = rawNum.slice(2,5);
  //     const midSectionStr = rawNum.slice(5,8);
  //     const lastSectionStr = rawNum.slice(8);
      // return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
      // let new:strim this.el.nativeElement.value = `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;


}
