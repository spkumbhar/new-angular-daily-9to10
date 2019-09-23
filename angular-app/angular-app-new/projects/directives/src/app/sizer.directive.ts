import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {
@Input("appSizer")
wd: number
constructor(
  private elRef: ElementRef<HTMLElement>,
  private rend: Renderer2


) { }
ngOnInit() {
  this.rend.setStyle(this.elRef.nativeElement, 'border', '1px solid red')
}

}
