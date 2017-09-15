import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,NgModel} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdCheckboxModule} from '@angular/material';
import {PreferencesService} from './preferences.service';
import { AppComponent } from './app.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     MdCheckboxModule,
     FormsModule
  ],
  exports: [
MdCheckboxModule
  ],
  providers: [PreferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
