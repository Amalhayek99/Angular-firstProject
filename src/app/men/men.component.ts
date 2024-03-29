import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  topsMen = [
      {id:1, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/10/18/16660703076e1bf7842fff192ebcd8c82a9d06f21e_thumbnail_600x.webp",
    size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false},
    {id:2, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/11/24/1669258675c9ccdea7330f9276e83ccfc45633bffe_thumbnail_600x.webp",
    size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
    {id:3, price: 29, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/12/08/1638933026c22cae14e72ed612850c8c3202f211a0_thumbnail_600x.webp",
    size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
    ]
    constructor(public service:ServiceService){}
    senditem(item:number){
      this.service.addCart(this.topsMen[item])
    }
}

