import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component'
import { HeaderCustomerComponent } from './shared/header-customer/header-customer.component'
import { HeaderVisitorComponent } from './shared/header-visitor/header-visitor.component'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderCustomerComponent,
    HeaderVisitorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
