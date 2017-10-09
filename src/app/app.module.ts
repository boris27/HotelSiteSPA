import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { PuffarComponent } from './main/puffar/puffar.component';
import { RumComponent } from './main/rum/rum.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    SearchComponent,
    PuffarComponent,
    RumComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
