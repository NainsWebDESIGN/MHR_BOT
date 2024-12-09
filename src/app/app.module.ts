import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ObjectPipe, formatArrPipe } from './app.pipe';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RockComponent } from './mhrSheet/rock/rock.component';
import { EquipmentComponent } from './mhrSheet/equipment/equipment.component';
import { MhrSheetComponent } from './mhrSheet/mhrSheet.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';

// Service
import { ApiService } from '@service/api.service';
import { UidStatusService } from '@service/uid-status.service';
import { PopupService } from '@service/popup.service';
import { AuthGuardService } from '@service/auth-guard.service';

// Pipe && Component
// import { xxx } from '@pipeModule';
// import { xxx } from '@comModule';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RockComponent,
    EquipmentComponent,
    MhrSheetComponent,
    PopupComponent,
    HeaderComponent,
    ObjectPipe,
    formatArrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, UidStatusService, PopupService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
