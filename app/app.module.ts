import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';
import { TemplateformComponent } from './components/template-form/template-form.component';
import { PanelModule } from './components/panel/panel.module';
import { HttpComponent } from './components/http/http.component';
import { DataService } from './components/http/data.service';
import { HttpModule } from '@angular/http';
import {  ExampleDirective } from './components/directive/demo.directive';
import { ChangeStrPipe } from './components/pipe/demo.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AnimationdemoComponent } from './components/animationdemo/animationdemo.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    HttpModule
  ],
  declarations: [ AppComponent, NavComponent, NhanVienComponent, TemplateformComponent, HttpComponent, NoPageFoundComponent,
    ExampleDirective, ChangeStrPipe, ObservableComponent, ProductsComponent, ProductDetailComponent, AnimationdemoComponent],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
