import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.css'
})
export class BookedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}