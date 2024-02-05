import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const appRouting : Routes =[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: "men", component: MenComponent },
  { path: "bag", component: CartComponent },
  { path: "women", component: WomenComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
