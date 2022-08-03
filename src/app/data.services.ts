import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./app.component";

@Injectable()
export class DataServices {
  constructor(private httpClient:HttpClient){}

  loadEmployees () {
    return this.httpClient.get(
      'https://test-angular-94d04-default-rtdb.firebaseio.com/data.json'
    );
  }

  saveEmployees (empleados:Empleado[]) {
    this.httpClient.put(
      'https://test-angular-94d04-default-rtdb.firebaseio.com/data.json',
      empleados
    ).subscribe(
      response => console.log('Se han guardado los empleados: ' + response),
      error => console.log('Error: ' + error),
    );
  }

  upgradeEmployees (index:number, empleado:Empleado) {
    let url = 'https://test-angular-94d04-default-rtdb.firebaseio.com/data/' + index + '.json';

    this.httpClient.put(url, empleado).subscribe(
      response => console.log('Se ha modificado correctamente el empleado: ' + response),
      error => console.log('Error: ' + error),
    );
  }

  deleteEmployee (index:number) {
    let url = 'https://test-angular-94d04-default-rtdb.firebaseio.com/data/' + index + '.json';

    this.httpClient.delete(url).subscribe(
      response => console.log('Se ha eliminado correctamente el empleado: ' + response),
      error => console.log('Error: ' + error),
    );
  }
}