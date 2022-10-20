import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CumstomerserviceComponent } from './pages/cumstomerservice/cumstomerservice.component';
import { PopupdetailsComponent } from './pages/popupdetails/popupdetails.component';
import { ShopAllComponent } from './pages/shop-all/shop-all.component';
import { ShopChristmasComponent } from './pages/shop-christmas/shop-christmas.component';
import { ShopBirthdayComponent } from './pages/shop-birthday/shop-birthday.component';
import { ShopMothersdayComponent } from './pages/shop-mothersday/shop-mothersday.component';
import { ShopNewyearComponent } from './pages/shop-newyear/shop-newyear.component';
import { ShopValentineComponent } from './pages/shop-valentine/shop-valentine.component';
import { ShopWeddingComponent } from './pages/shop-wedding/shop-wedding.component';

const routes: Routes = [
  { path: 'Contact', component: ContactComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'Detail/:id', component: DetailComponent },
  { 
    path: 'Shop', 
    component: ShopComponent,
    children: [
      { path: 'Shopall', component: ShopAllComponent },
      { path: 'Christmas', component: ShopChristmasComponent },
      { path: 'Birthday', component: ShopBirthdayComponent },
      { path: 'Mothersday', component: ShopMothersdayComponent },
      { path: 'Newyear', component: ShopNewyearComponent },
      { path: 'Valentine', component: ShopValentineComponent },
      { path: 'Wedding', component: ShopWeddingComponent },
      { path: '', redirectTo: '/Shopall', pathMatch: 'full'}
    ] },
  { path: 'Main', component: MainComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Customerservice', component: CumstomerserviceComponent },
  { path: 'Popup', component: PopupdetailsComponent },
  { path: 'Shopall', component: ShopAllComponent },
  { path: 'Christmas', component: ShopChristmasComponent },
  { path: 'Birthday', component: ShopBirthdayComponent },
  { path: 'Mothersday', component: ShopMothersdayComponent },
  { path: 'Newyear', component: ShopNewyearComponent },
  { path: 'Valentine', component: ShopValentineComponent },
  { path: 'Wedding', component: ShopWeddingComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
