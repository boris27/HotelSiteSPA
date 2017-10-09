import { Component, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-rum',
  templateUrl: './rum.component.html',
  styleUrls: ['./rum.component.sass']
})
export class RumComponent implements OnInit, OnDestroy {

  sliderFill: Function;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.sliderFill = this.renderer.listen(this.elementRef.nativeElement.querySelector('.slider'),
      'input', (event) => {
      const val = (event.target.value - event.target.min) / (event.target.max - event.target.min);
      event.target.style.backgroundImage = `-webkit-gradient(linear,left top,right top,
        color-stop(${val}, #1DB1AE),color-stop(${val}, #C5C5C5))`;
    });
  }

  ngOnDestroy() {
    this.sliderFill();
  }

}
