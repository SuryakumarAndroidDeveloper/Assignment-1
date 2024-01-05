import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employees: Employee[] = [
    { id: 104, name: 'sairaj',designation:'sse',location:'5/6/2016' , address:'hyderabad,hitechcity', salary: 750000 },
    { id: 102, name: 'Manoj',designation:'TL',location:'5/7/2018' , address:'Banglore,whitefeild', salary: 900000 },
    { id: 105, name: 'Ramesh',designation:'se',location:'7/12/2016' , address:'ADFGGGTGDFG', salary: 65546 },
    { id: 340, name: 'suresh',designation:'sse',location:'9/10/2016' , address:'ADFGGGTGDFG', salary: 654645 },
    { id: 456, name: 'Ravi',designation:'AM',location:'4/6/2016' , address:'ADFGGGTGDFG', salary: 34555 },
    { id: 688, name: 'sam',designation:'se',location:'3/6/2016' , address:'ADFGGGTGDFG', salary: 34534 },
    { id: 478, name: 'ram',designation:'sse',location:'3/6/2016' , address:'ADFGGGTGDFG', salary: 345345 },
    { id: 346, name: 'jai',designation:'TL',location:'3/6/2016' , address:'ADFGGGTGDFG', salary: 4534534 },
    { id: 457, name: 'kamal',designation:'M',location:'3/6/2016' , address:'ADFGGGTGDFG', salary: 453454 },
    { id: 124, name: 'mona',designation:'se',location:'3/6/2016' , address:'ADFGGGTGDFG', salary: 364335 },
    // Add more employee data
  ];

  showSalary = true; // Default value to show salary
  showId = true; // Default value to show Emp Id

  toggleSalaryDisplay() {
    this.showSalary = !this.showSalary;
  }
  toggleIdDisplay() {
    this.showId = !this.showId;
  }
}
