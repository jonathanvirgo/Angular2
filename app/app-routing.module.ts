import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';
import { TemplateformComponent } from './components/template-form/template-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { HttpComponent } from './components/http/http.component';
import { ObservableComponent } from './components/observable/observable.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AnimationdemoComponent } from './components/animationdemo/animationdemo.component';

const routes: Routes = [
  {path: 'nhan-vien',component: NhanVienComponent},
  {path: 'template-form',component: TemplateformComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'no-page-found', component: NoPageFoundComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'animation', component: AnimationdemoComponent},
  {path: '**', redirectTo: 'no-page-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
