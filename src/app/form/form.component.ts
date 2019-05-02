import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  options: string[] = [];


getallmanufacturers() {
fetch(this.manufacUrl)
  .then((response) => {
    console.log('working');
    return response.json();
  })
  .then((myJson) => {
    let key = 'Mfr_CommonName';
    let i = 0;
   // console.log(myJson.Results[3].Mfr_Name);
    for (key in myJson.Results) {
      if (myJson.Results.hasOwnProperty(key)) {
          //console.log(myJson.Results[i].Mfr_Name);
          let mfrName = myJson.Results[i].Mfr_CommonName;
          if (!this.options.includes(mfrName) && mfrName !== null) {
               this.options.push(mfrName);
          }
          i++;
       }
    }
    this.options.sort();
  });
}
ngOnInit() {
    this.getallmanufacturers();
  }

}
