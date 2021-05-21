import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id":1,"name":"Andrew","age":30      },
      {"id":2,"name":"Abel","age":32      },
      {"id":3,"name":"Wondeshi","age":23      },
      {"id":4,"name":"Christina","age":29      },
      {"id":5,"name":"AElena","age":36      },
  
  ]
  }
}
