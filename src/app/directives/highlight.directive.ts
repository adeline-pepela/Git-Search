import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 

      
     this.el.nativeElement.style.backgroundColor = ''; }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('brown');

  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }
}
