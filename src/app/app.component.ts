import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ServiceEmployeeService } from './service-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // Servicio
  constructor(
  ){}

  ngOnInit(): void {
  }
}

export class Empleado {
  constructor (name:string, lastname:string, position:string, salary:number) {
    this.name = name;
    this.lastname = lastname;
    this.position = position;
    this.salary = salary;
  }

  name:string = '';
  lastname:string = '';
  position:string = '';
  salary:number = 0;
}
