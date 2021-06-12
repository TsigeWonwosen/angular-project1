import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpService} from '../../http.service'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public taskId :string | null;
  public brows:any;
  constructor(private route:ActivatedRoute,private _http:HttpService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
this.taskId = id;
   this._http.getBeer().subscribe(data => {
      this.brows = data
    })
  }

}
