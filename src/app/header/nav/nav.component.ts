import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
 listOfLinks = [
   {
     name: 'about',
     href: '/'
   },
   {
     name: 'faq',
     href: '/'
   },
   {
     name: 'blog',
     href: '/'
   },
   {
     name: 'support',
     href: '/'
   }
 ];
  constructor() { }

  ngOnInit() {

  }

}
