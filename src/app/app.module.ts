import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent, ContentComponent,
    ReactiveFormsModule]
})
export class AppModule { }
