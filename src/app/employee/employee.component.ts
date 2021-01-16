import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  department = 'IT';

  name = 'Amit';

  hidden = false;

  todos: any;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getTodos().subscribe(res => this.todos = res);
  }

  toggle() {
    this.hidden = !this.hidden;
  }

}
