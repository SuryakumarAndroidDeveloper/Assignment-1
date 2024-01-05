import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-hotel',
    standalone: true,
    templateUrl: './hotel.component.html',
    styleUrl: './hotel.component.css',
    imports: [CommonModule, FormsModule, ChildComponent]
})
export class HotelComponent {

  RoomType: string[]=['Single room','Presidential Suite','Connecting rooms','Double room'];
  RoomNo:string[]=['1','2','3','4','5'];
  PersonNo:string[]=['1','2','3','4','5'];
  ChildrenNo:string[]=['0','1','2','3','4','5'];
  Restaurantfacilities:string[]=['yes','No'];
  formData: any = {};

  onSubmit() {
    // Handle form submission logic here
    // You can perform any processing or send data to a service
  }

}
