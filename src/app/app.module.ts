import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetJsonService } from './get-json.service';
import { Input3Component } from './input3/input3.component';


@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Input2Component,
    Input3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [GetJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
