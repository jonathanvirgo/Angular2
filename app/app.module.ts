import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, NavComponent, NhanVienComponent],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
