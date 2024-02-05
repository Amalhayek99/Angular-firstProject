import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
removeitem(item:number){
  this.service.removeitem(item)
  console.log(this.removeitem)
}
constructor(public service:ServiceService) {}
}
