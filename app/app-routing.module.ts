import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';

const routes: Routes = [
  {path: 'nhan-vien',component: NhanVienComponent},
  {path: '**', redirectTo: 'nhan-vien'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
