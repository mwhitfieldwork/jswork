import { Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding, Renderer2 } from "@angular/core";


@Directive({
selector: "[bar]"
})

export class ProductGraphDirective {
@Input() price: string;

constructor(private element: ElementRef, private renderer: Renderer2) {
}

ngOnit(){
    this.renderer.setStyle(this.element.nativeElement, 'height', this.price);
}

}