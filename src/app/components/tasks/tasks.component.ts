import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpService} from '../../http.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  brows: any=[];

  constructor(private _http:HttpService, private router:Router) {  }

  
  ngOnInit() {
    
    this._http.getBeer().subscribe(data => {
      this.brows = data;
    })
    
    
    this._http.myMethod()
    console.table(this.brows)
  }
selectBrew(brew:any){
  this.router.navigate(['/tasks',brew.id])
}
}
