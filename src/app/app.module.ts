import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

import { BootstrapModalModule, BuiltInOptions } from 'ngx-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AlertComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BootstrapModalModule.forRoot({
      container: document.body,
      builtInOptions: <BuiltInOptions>{
      }
    }),
  ],
  entryComponents: [
    AlertComponent,
    ConfirmComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
