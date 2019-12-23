import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';
import { TemplateformComponent } from './components/template-form/template-form.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  {path: 'nhan-vien',component: NhanVienComponent},
  {path: 'template-form',component: TemplateformComponent},
  {path: 'panel', component: PanelComponent},
  {path: '**', redirectTo: 'nhan-vien'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
