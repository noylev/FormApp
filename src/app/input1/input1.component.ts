import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { GetJsonService } from '../get-json.service';
import { BindingScope } from '@angular/compiler/src/render3/view/template';
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { StickyDirection } from '@angular/cdk/table';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})


export class Input1Component implements OnInit{
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  makeUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/';
  modelUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/';
  
  key = 'Mfr_CommonName';
  makeKey = 'Make_Name';
  modelKey = 'Model_Name';
 
  manufactControl: FormControl = new FormControl();
  makesControl: FormControl = new FormControl();
  modelsControl: FormControl = new FormControl();

  manufacterers: any[] = [];
  makes: any[] = ['input2'];
  models: any[] = ['input3'];
  constructor(private http: HttpClient, private getJsonService: GetJsonService) {
  }

  ngOnInit() {
    this.manufacterers = this.getJsonService.getJson(this.manufacUrl, this.key);
  }

  getCustomUrl(url: string, key: string) {
    return url + key + '?format=json';
  }

  getMakes(manufact) {
    alert(manufact);
    let makeUrl = this.getCustomUrl(this.makeUrl, manufact);
    alert(makeUrl);
    this.makes = this.getJsonService.getJson(makeUrl , this.makeKey);
  }
  getModels(make) {
    alert(make);
    let modelUrl = this.getCustomUrl(this.modelUrl, make);
    alert(modelUrl);
    this.models = this.getJsonService.getJson(modelUrl , this.modelKey);
  }


}






/*
export class Input1Component implements OnInit {
  formGroup: FormGroup;
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  key = 'Mfr_CommonName';


  manufacControl: FormControl = new FormControl();
  makesControl: FormControl = new FormControl();
  manufacturers: string[] = ['working input1'];
  makes: string[] = ['working', 'input2'];

  constructor(private formBuilder: FormBuilder, private getJsonService: GetJsonService) {
    this.manufacturers = getJsonService.getJson(this.manufacUrl, this.key);
  }

  createForm() {
       this.formGroup = this.formBuilder.group({
      'input1': [null],
      'input2': [null],
      'input3': [null]
    });
}
  ngOnInit() {
    this.createForm();


  }
}*/
