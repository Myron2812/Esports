import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { ClipsComponent } from './clips/clips.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    NavbarComponent,
    CardsComponent,
    ClipsComponent,
    RegisterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };