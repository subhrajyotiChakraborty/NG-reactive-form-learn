import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorIt]'
})
export class ColorItDirective {

  @Input('appColorIt') givenColor: string;

  @HostListener('mouseenter') enter() {
    this.colorIt();
  }

  @HostListener('mouseleave') leave() {
    this.colorIt(true);
  }

  constructor(private elRef: ElementRef) { }

  private colorIt(isLeaving?: boolean): void {
    // tslint:disable-next-line:max-line-length
    this.elRef.nativeElement.style.backgroundColor = isLeaving ? null : (this.givenColor && this.givenColor.trim().length ? this.givenColor : '#b83b5e');
    this.elRef.nativeElement.style.color = isLeaving ? '#333' : '#fff';
    this.elRef.nativeElement.style.fontWeight = isLeaving ? '100' : 'bold';
  }

}
