import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appDemo]',
})
export class ExampleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#fff';
    elementRef.nativeElement.style.color = '#000';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }
}