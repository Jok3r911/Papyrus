import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CumstomerserviceComponent } from './pages/cumstomerservice/cumstomerservice.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductService } from './product.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PopupdetailsComponent } from './pages/popupdetails/popupdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    DetailComponent,
    ShopComponent,
    HeaderComponent,
    MainComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    BlogComponent,
    CumstomerserviceComponent,
    PopupdetailsComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
