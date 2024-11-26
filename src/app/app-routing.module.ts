import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Component
import { LoginComponent } from './login/login.component';
import { RockComponent } from './rock/rock.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  // { path: 'gameResult', component: GameResultComponent },
  // 使用萬用路由時，一定要放在最後一個路由定義中！
  { path: '**', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
