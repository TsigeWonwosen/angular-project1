import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 10;
  name:string =' ';
  public employees:any= [];
  
  constructor(private _employeeService:EmployeeService) { }

 countClick = () => { this.clickCounter += 1
}

 
resetCounter = () => {this.clickCounter = 0}
 

  ngOnInit(){

    this.employees = this._employeeService.getEmployees()
  }

}
