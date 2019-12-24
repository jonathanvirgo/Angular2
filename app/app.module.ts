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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    HttpModule
  ],
  declarations: [ AppComponent, NavComponent, NhanVienComponent, TemplateformComponent, HttpComponent, ExampleDirective, ChangeStrPipe, ObservableComponent],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
