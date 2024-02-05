import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public Cart:any[]=[];
public sum:number=0;
  addCart(item:any):void{
    this.sum=this.sum+item.price;
    this.Cart.push(item);
    console.log(this.Cart);
  }


removeitem(item:any):void{
  const index = this.Cart.indexOf(item);
    if (index !== -1) {
      this.Cart.splice(index, 1);
      this.sum=this.sum-item.price
}
}

constructor() { }

}
