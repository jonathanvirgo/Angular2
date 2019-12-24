import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';
import { TemplateformComponent } from './components/template-form/template-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { HttpComponent } from './components/http/http.component';
import { ObservableComponent } from './components/observable/observable.component';

const routes: Routes = [
  {path: 'nhan-vien',component: NhanVienComponent},
  {path: 'template-form',component: TemplateformComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observable', component: ObservableComponent},
  {path: '**', redirectTo: 'nhan-vien'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
