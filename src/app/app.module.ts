import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './auth-guard.service';
import { RoleguardService } from './roleguard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './hr/auth/auth.service';
import { RolrservService } from './rolrserv.service';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [ AuthGuardService,RoleguardService,AuthService,RolrservService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
