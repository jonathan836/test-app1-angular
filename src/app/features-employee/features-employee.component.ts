import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-features-employee',
  templateUrl: './features-employee.component.html',
  styleUrls: ['./features-employee.component.css']
})
export class FeaturesEmployeeComponent implements OnInit {

  @Output() featuresEmployee = new EventEmitter<string>();

  // constructor(private myService:ServiceEmployeeService) { }

  ngOnInit(): void {
  }

  addFeatures(value: string) {
    // this.myService.showMessage(value);
    // this.featuresEmployee.emit(value);
  }
}
