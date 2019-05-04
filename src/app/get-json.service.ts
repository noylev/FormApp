import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor() { }

  getJson(url: string, key: string) {
    let options: string [] = [];
    fetch(url)
    .then((response) => {
      console.log('json service is running...');
      return response.json();
    })
    .then((myJson) => {
      let i = 0;
      for (i = 0; i < myJson.Results.length; i++) {
            let dataVar = myJson.Results[i][key];
            if (!options.includes(dataVar) && dataVar !== null) {
                 options.push(dataVar);
            }
      }
      options.sort();
    });
    return options;
  }



}


