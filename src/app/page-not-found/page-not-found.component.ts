import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="container"> 
    <h2>
      Page You are Looking is not Found!
    </h2>
    <a routerLink='/'>Back Home</a>
</div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
