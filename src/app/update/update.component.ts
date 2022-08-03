import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../app.component';
import { EmployeeService } from '../employee.service';
import { ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  empleados:Empleado[] = [];

  action:number;

  constructor(
    private router:Router,
    private myService:ServiceEmployeeService,
    private employeesService:EmployeeService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.action = parseInt(this.route.snapshot.queryParams['action']);

    this.empleados = this.employeesService.empleados
    this.index = this.route.snapshot.params['id'];
    let empleado:Empleado = this.employeesService.searchEmployee(this.index);

    this.textName = empleado.name;
    this.textLastName = empleado.lastname;
    this.textPosition = empleado.position;
    this.textSalary = empleado.salary;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  // updateEmployee () {
  //   let myEmployee = new Empleado(this.textName, this.textLastName, this.textPosition, this.textSalary);
  //   // this.myService.showMessage('Nombre del empleado: ' + newEmployee.name + ' ' + newEmployee.lastname);
  //   // this.empleados.push(newEmployee);
  //   this.employeesService.updateEmployee(this.index, myEmployee);
  // }

  // deleteEmployee () {
  //   this.employeesService.deleteEmployee(this.index);
  // }


  updateEmployee () {
    if (this.action == 1) {
      let myEmployee = new Empleado(this.textName, this.textLastName, this.textPosition, this.textSalary);
      // this.myService.showMessage('Nombre del empleado: ' + newEmployee.name + ' ' + newEmployee.lastname);
      // this.empleados.push(newEmployee);
      this.employeesService.updateEmployee(this.index, myEmployee);

      this.router.navigate(['']);
    } else {
      this.employeesService.deleteEmployee(this.index);

      this.router.navigate(['']);
    }
  }

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;
  index:number;
}
