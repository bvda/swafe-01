import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('lime')
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('')
  }

  highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
  