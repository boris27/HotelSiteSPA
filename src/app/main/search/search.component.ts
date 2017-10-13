import { Component, OnInit, Renderer2, OnDestroy, ElementRef } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {
  submitHandler: Function;
  constructor( private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.submitHandler = this.renderer.listen(this.elementRef.nativeElement.querySelector('form'), 'submit' , (event) => {
      const data = {
        location: event.target['0'].value,
        date: new Date (event.target['1'].value),
        sizeOfRoom:  [event.target['2'].checked ? event.target['2'].name : '', event.target['3'].checked ? event.target['3'].name : '',
          event.target['4'].checked ? event.target['4'].name : '', event.target['5'].checked ? event.target['5'].name : '',
          event.target['6'].checked ? event.target['6'].name : ''].join(' ')
      };
      console.log(data);
      event.preventDefault();
    });
  }

  ngOnDestroy() {
    this.submitHandler();
  }

}
