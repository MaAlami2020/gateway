import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppRoutingModule } from './app.routes';
//import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
//import { OrderComponent } from './components/order/order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { OrderStateComponent } from './components/order-state/order-state.component'; 
//import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemComponent } from './components/item/item.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ItemsComponent } from './components/items/items.component';
import { NewClothesComponent } from './components/new-clothes/new-clothes.component';
import { ClothesStockComponent } from './components/clothes-stock/clothes-stock.component';
import { ShoesStockComponent } from './components/shoes-stock/shoes-stock.component';
import { NewShoesComponent } from './components/new-shoes/new-shoes.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ServerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppServerModule { }