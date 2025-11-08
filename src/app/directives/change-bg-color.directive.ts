import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]',
  standalone: true
})
export class ChangeBgColorDirective {

  constructor(el:ElementRef) { 
    
    el.nativeElement.style.backgroundColor='yellow'
  }
}
