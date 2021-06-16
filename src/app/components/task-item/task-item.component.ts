import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router'

import {ActivatedRoute} from '@angular/router'
import {HttpService} from '../../http.service'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public taskId :string | null;
  public singleTask : string | null;
  public brows:any;
  constructor(private route:ActivatedRoute,private _http:HttpService, private router:Router) { }

@Input() ItemsFromParent : any;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
this.taskId = id;
   this._http.getBeer().subscribe(data => {
      this.brows = data
      
    })

  }
  
  
  async selectBrew(brew:any){
    this.router.navigate(['/tasks',brew.id])
    let task= await this.brows.filter((brow:any) => brow.id === brew.id)[0]
      console.log("*** " + task.name + " id : >>> " + task.id)
      this.singleTask = await task.name
}

deleteBrew(id:string){
  this.brows = this.brows.filter((brow:any) => brow.id  !== id )

}

}
