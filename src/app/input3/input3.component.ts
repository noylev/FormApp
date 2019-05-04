import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'app-input3',
  templateUrl: './input3.component.html',
  styleUrls: ['./input3.component.css']
})
export class Input3Component implements OnInit {
  //message: string;
  manufacUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json';
  key = 'Model_Name';
  myControl = new FormControl();
  options: string[] = [];

  constructor(private getJsonService: GetJsonService) {
    this.options = getJsonService.getJson(this.manufacUrl, this.key);
  }
  ngOnInit() {
  }

}
