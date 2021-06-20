import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../http.service'


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {


  public Id: any;
  public singleBrow :any;

  constructor(private activatedRoute: ActivatedRoute, private _http:HttpService,private router:Router) {}


  ngOnInit(): void {

  this.Id = this.activatedRoute.snapshot.paramMap.get('id');

    this._http.getBeerByParams(this.Id).subscribe(data => {
    
        this.singleBrow = data;
      
  })
  
}
goBack (){
  this.router.navigate(['/tasks'])
}
}