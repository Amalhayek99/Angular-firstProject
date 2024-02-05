import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageUrl:string ='https://www.svgrepo.com/show/43071/shopping-bag.svg';
    constructor(public service:ServiceService) {}
}
