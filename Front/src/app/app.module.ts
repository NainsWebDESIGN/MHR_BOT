import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RockComponent } from './rock/rock.component';
import { EquipmentComponent } from './equipment/equipment.component';

// Service
import { ApiService } from '@app/api.service';

// Pipe && Component
// import { xxx } from '@pipeModule';
// import { xxx } from '@comModule';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RockComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
