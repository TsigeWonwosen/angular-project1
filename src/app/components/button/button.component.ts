import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
public isShow : boolean = true;
  ngOnInit(): void {
  }

  showText (){
    this.isShow = !this.isShow
   
  }
}
