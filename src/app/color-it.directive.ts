import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorIt]'
})
export class ColorItDirective {

  @HostListener('mouseenter') enter() {
    this.colorIt();
  }

  @HostListener('mouseleave') leave() {
    this.colorIt(true);
  }

  constructor(private elRef: ElementRef) { }

  private colorIt(isLeaving?: boolean): void {
    this.elRef.nativeElement.style.backgroundColor = isLeaving ? null : 'yellow';
  }

}
