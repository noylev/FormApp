import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor() { }

  getJson(url: string, key: string) {
    let options: string [] = [];
    fetch(url)
    .then((response) => {
      console.log('working in service yessssss');
      return response.json();
    })
    .then((myJson) => {
      let i = 0;
      //let dataVar = myJson.Results[i][key];
      //console.log(dataVar);
      for (i = 0; i < myJson.Results.length; i++) {
            let dataVar = myJson.Results[i][key];
            console.log(dataVar);
            if (!options.includes(dataVar) && dataVar !== null) {
                 options.push(dataVar);
            }
      }
      options.sort();
    });
    return options;
  }



}


