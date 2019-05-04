import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})


export class Input1Component implements OnInit{
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  makeUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/';
  modelUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/';
  
  mfrKey = 'Mfr_CommonName';
  makeKey = 'Make_Name';
  modelKey = 'Model_Name';
 
  manufactControl: FormControl = new FormControl();
  makesControl: FormControl = new FormControl();
  modelsControl: FormControl = new FormControl();

  manufacturers: any[] = [];
  makes: any[] = [];
  models: any[] = [];

  constructor(private getJsonService: GetJsonService) {
  }

  ngOnInit() {
    this.manufacturers = this.getJsonService.getJson(this.manufacUrl, this.mfrKey);
  }

  getCustomUrl(url: string, key: string) {
    return url + key + '?format=json';
  }

  getMakes(manufact) {
    let makeUrl = this.getCustomUrl(this.makeUrl, manufact);
    this.makes = this.getJsonService.getJson(makeUrl , this.makeKey);
  }
  getModels(make) {
    let modelUrl = this.getCustomUrl(this.modelUrl, make);
    this.models = this.getJsonService.getJson(modelUrl , this.modelKey);
  }
  validateData() {
    alert('Thank you for submitting the data!');
  }

}
