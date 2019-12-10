import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]'
})
export class HeaderScrollDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll')
  public onScroll(): void {
    if (window.pageYOffset > 50) {
      this.renderer.addClass(this.elementRef.nativeElement, 'header__active');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'header__active');
    }
  }
}
