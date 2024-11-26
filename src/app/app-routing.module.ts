import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Component
import { LoginComponent } from './login/login.component';
import { RockComponent } from './mhrSheet/rock/rock.component';
import { EquipmentComponent } from './mhrSheet/equipment/equipment.component';
import { MhrSheetComponent } from '@app/mhrSheet/mhrSheet.component';

import { AuthGuardService } from '@service/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sheet',
    component: MhrSheetComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'rock', component: RockComponent },
      { path: 'equipment', component: EquipmentComponent },
      { path: '**', component: RockComponent, pathMatch: 'full' }
    ]
  },
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
