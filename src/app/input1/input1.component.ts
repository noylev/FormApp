import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  key = 'Mfr_CommonName';
  myControl = new FormControl();
  options: string[] = [];

  constructor(private getJsonService: GetJsonService) {
    this.options = getJsonService.getJson(this.manufacUrl, this.key);
  }
/*
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
          let mfrName = myJson.Results[i].Mfr_CommonName;
          if (!this.options.includes(mfrName) && mfrName !== null) {
               this.options.push(mfrName);
          }
          i++;
       }
    }
    this.options.sort();
  });
}*/
ngOnInit() {}

}
