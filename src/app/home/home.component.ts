import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ServiceEmployeeService } from '../service-employee.service';
import { Empleado } from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // calculadora
  n1:string = '0';
  n2:string = '0';
  result:number = 0;

  sum():void {
    this.result = parseInt(this.n1) + parseInt(this.n2);
  }

  // Registrar usuario
  message2 = '';
  registed = false;
  name1:string = '';
  lastname1:string = '';
  position1:string = '';

  registedUser(){
    this.registed = true;

    this.message2 = 'SUCCESS'
  }

  // titulo objeto
  titles:any = [
    {message:'Python'},
    {message:'Java'},
    {message:'Flutter'},
    {message:'Kotlin'},
    {message:'JavaScript'}
  ];

  constructor(
    private myService:ServiceEmployeeService,
    private employeesService:EmployeeService
  ) { }

  ngOnInit(): void {
    // this.empleados = this.employeesService.empleados

    this.employeesService.getEmployees().subscribe(
      myEmployees => {
        console.log(myEmployees);
        this.empleados = Object.values(myEmployees);
        this.employeesService.setEmployees(this.empleados);
      }
    );
  }

  empleados:Empleado[] = [];


  // empleados:Empleado[] = [
  //   new Empleado('Richard', 'Velasco', 'A', 500),
  //   new Empleado('Simon', 'Saad', 'B', 400),
  //   new Empleado('Edixon', 'Rojas', 'C', 300),
  //   new Empleado('Jose', 'Pita', 'D', 250),
  // ];

  addEmployee () {
    let newEmployee = new Empleado(this.textName, this.textLastName, this.textPosition, this.textSalary);
    // this.myService.showMessage('Nombre del empleado: ' + newEmployee.name + ' ' + newEmployee.lastname);
    // this.empleados.push(newEmployee);
    this.employeesService.addEmployeeService(newEmployee);
  }

  deleteEmployee () {
    this.empleados.pop();
  }

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;

}