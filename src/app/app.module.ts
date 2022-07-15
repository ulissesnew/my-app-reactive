import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from './core/auth/token.interceptor';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddressComponent } from './core/forms/address/address.component';
import { ContactComponent } from './core/forms/contact/contact.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, AddressComponent, ContactComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
