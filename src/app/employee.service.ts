import { Injectable } from "@angular/core";
import { Empleado } from "./app.component";
import { DataServices } from "./data.services";
import { ServiceEmployeeService } from "./service-employee.service";

@Injectable()
export class EmployeeService {
    constructor(
        private popUpWindowService:ServiceEmployeeService,
        private dataService:DataServices,
    ){}

    setEmployees (myEmployees:Empleado[]) {
        this.empleados = myEmployees;
    }

    getEmployees () {
        return this.dataService.loadEmployees();
    }

    empleados:Empleado[] = [];

    // empleados:Empleado[] = [
    //     new Empleado('Richard', 'Velasco', 'A', 500),
    //     new Empleado('Simon', 'Saad', 'B', 400),
    //     new Empleado('Edixon', 'Rojas', 'C', 300),
    //     new Empleado('Jose', 'Pita', 'D', 250),
    // ];

    addEmployeeService (employee:Empleado) {
        this.popUpWindowService.showMessage(
            'Persona que se va a agregar: \n' + employee.name + '\n' + employee.salary
        )
        this.empleados.push(employee);

        this.dataService.saveEmployees(this.empleados);
    }

    searchEmployee (index:number) {
        let employee:Empleado = this.empleados[index];

        return employee;
    }

    updateEmployee (index:number, employee:Empleado) {
        let employeeUpdated = this.empleados[index];

        employeeUpdated.name = employee.name;
        employeeUpdated.lastname = employee.lastname;
        employeeUpdated.position = employee.position;
        employeeUpdated.salary = employee.salary;

        this.dataService.upgradeEmployees(index, employee);
    }

    deleteEmployee (index:number) {
        this.empleados.splice(index, 1);

        this.dataService.deleteEmployee(index);

        if (this.empleados != null) {
            this.dataService.saveEmployees(this.empleados);
        }
    }
}