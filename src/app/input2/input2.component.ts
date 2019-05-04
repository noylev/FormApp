import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component implements OnInit {
 //message = 'this is input 2 url';
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json';
  key = 'Make_Name';
  myControl = new FormControl();
  options: string[] = [];

  constructor(private getJsonService: GetJsonService) {
    this.options = getJsonService.getJson(this.manufacUrl, this.key);
  }

  ngOnInit() {
  }

}
