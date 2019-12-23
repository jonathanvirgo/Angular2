import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';
import { TemplateformComponent } from './components/template-form/template-form.component';
import { PanelModule } from './components/panel/panel.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule
  ],
  declarations: [ AppComponent, NavComponent, NhanVienComponent, TemplateformComponent],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
