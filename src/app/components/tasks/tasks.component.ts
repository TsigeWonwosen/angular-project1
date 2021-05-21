import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../http.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  brows: any=[];

  constructor(private _http:HttpService) {  }

  
  ngOnInit() {
    
    this._http.getBeer().subscribe(data => {
      this.brows = data;
      console.log(this.brows)
    })
    
    
    this._http.myMethod()
    console.log(typeof this.brows)
  }

}
