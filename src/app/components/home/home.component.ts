import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

import {IEmployee} from '../../employee'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 10;
  name:string =' ';
  public employees:IEmployee[] = [];
  public errorMsg:any;
  
  constructor(private _employeeService:EmployeeService) { }

 countClick = () => { this.clickCounter += 1 }

 
resetCounter = () => {this.clickCounter = 0}
 

  ngOnInit(){

   this._employeeService.getEmployees().subscribe(data =>  this.employees = data,error => this.errorMsg = error)

}

}