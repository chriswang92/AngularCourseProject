import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // whenever isOpen is true, this 'open' will be attached into class of the element
    @HostBinding('class.open') isOpen = false;
    // Makes a dropdown can also be closed by a click anywhere outside
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    
    constructor(private elRef: ElementRef) {}
}