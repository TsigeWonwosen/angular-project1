import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
clickCounter: number = 10;
name:string =' ';

 countClick = () => { this.clickCounter += 1
}

 
resetCounter = () => {this.clickCounter = 0}
 

  ngOnInit(): void {
  }

}
