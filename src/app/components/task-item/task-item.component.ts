import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router'

import {ActivatedRoute, ParamMap} from '@angular/router'
import {HttpService} from '../../http.service'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public taskId :string | null;
 @Output() onSelectTask : EventEmitter<any> = new EventEmitter()
 public singleTask : any;
  public brows:any;
  constructor(private route:ActivatedRoute,private _http:HttpService, private router:Router) { }

@Input() ItemsFromParent : any;
@Output() deleteItem : EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('id')
      this.taskId = id;
    })
   this._http.getBeer().subscribe(data => {
      this.brows = data
      
    })

  }
  
  
  selectBrew(brew:any){
    this.router.navigate(['/tasks',brew.id])
  this.singleTask =  brew.name  

}

deleteBrew(id:string){
 this.deleteItem.emit(id)

}



}
