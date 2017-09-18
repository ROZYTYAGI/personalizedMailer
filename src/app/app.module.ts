import { BrowserModule } from '@angular/platform-browser';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgModule } from '@angular/core';
import {FormsModule,NgModel} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdCheckboxModule} from '@angular/material';
import {PreferencesService} from './preferences.service';
import { AppComponent } from './app.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { MultiCheckBoxComponent} from './multi-check-box/multi-check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferencesComponent,
    MultiCheckBoxComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     MdCheckboxModule,
     FormsModule,
     AngularMultiSelectModule
  ],
  exports: [
MdCheckboxModule
  ],
  providers: [PreferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
