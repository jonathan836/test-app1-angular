import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../app.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() listEmployee: Empleado;

  @Input() index: number;
  
  constructor() { }

  ngOnInit(): void { 
  }

  empleados:Empleado[] = [
    new Empleado('Richard', 'Velasco', 'A', 500),
    new Empleado('Simon', 'Saad', 'B', 400),
    new Empleado('Edixon', 'Rojas', 'C', 300),
    new Empleado('Jose', 'Pita', 'D', 250),
  ];

  addEmployee (empleado:Empleado) {
    let newEmployee = 
    this.empleados.push(empleado);
  }

  deleteEmployee () {
    this.empleados.pop();
  }

  arrayFeatures = [''];

  addFeature(newFeature: string) {
    this.arrayFeatures.push(newFeature);
  }
}
