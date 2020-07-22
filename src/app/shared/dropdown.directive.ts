import { Directive, OnInit, ElementRef, HostListener, HostBinding, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  activeClass: string = 'open';
  isActive: boolean = false;
  //@HostBinding('class.open') isActive: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}


  //@HostListener('click') toggleOpen(event: Event): void {
  toggleOpen(): void {
    if (this.isActive) {
      this.closeDropdown();
      return;
    }
    this.openDropdown();
  }

  openDropdown(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.activeClass);
    this.isActive = true;
  }

  closeDropdown(): void {
      this.renderer.removeClass(this.elementRef.nativeElement, this.activeClass);
      this.isActive = false;
  }


  @HostListener('document:click', ['$event']) watchClick(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.toggleOpen()
    } else {
      this.closeDropdown();
    }
  }

}
