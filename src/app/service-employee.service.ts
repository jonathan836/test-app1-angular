import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {

  constructor() { }

  showMessage (message:string) {
    alert(message);
  }
}
