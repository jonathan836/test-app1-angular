import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../app.component';
import { EmployeeService } from '../employee.service';
import { ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  empleados:Empleado[] = [];

  constructor(
    private router:Router,
    private myService:ServiceEmployeeService,
    private employeesService:EmployeeService
  ) { }

  ngOnInit(): void {
    this.empleados = this.employeesService.empleados
  }

  goToHome() {
    this.router.navigate(['']);
  }

  addEmployee () {
    let newEmployee = new Empleado(this.textName, this.textLastName, this.textPosition, this.textSalary);
    // this.myService.showMessage('Nombre del empleado: ' + newEmployee.name + ' ' + newEmployee.lastname);
    // this.empleados.push(newEmployee);
    this.employeesService.addEmployeeService(newEmployee);
  }

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;

}
