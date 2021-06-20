import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../http.service'


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {


  public id: string | null;
  public singleBrow :any

  constructor(private activatedRoute: ActivatedRoute, private _http:HttpService) {
  this.activatedRoute.queryParams.subscribe(params => {
        let date = params['id'];
        console.log(params); // Print the parameter to the console. 
    });
}


  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this._http.getBeer().subscribe(data => {
      if(data === this.id){

        this.singleBrow = data;
      }
  })
  
}
}