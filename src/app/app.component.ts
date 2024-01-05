import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookedComponent } from './booked/booked.component';
import { HotelComponent } from "./hotel/hotel.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, BookedComponent, HotelComponent, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {

  constructor(){
    
  }
  ngOnInit(){
    
  }


 
}
