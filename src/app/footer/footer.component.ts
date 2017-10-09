import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

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
    },
    {
      name: 'help forum',
      href: '/'
    },
    {
      name: 'feedback',
      href: '/'
    },
    {
      name: 'lorem ipsum',
      href: '/'
    },
    {
      name: 'lorem ipsum',
      href: '/'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
