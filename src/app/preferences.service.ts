import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PreferencesService {

  constructor(private http: Http) { }
insert(adds){
  return this.http.post('http://localhost:3001/insert_preference',adds)
  .map(res=>res.json());
}
insertSecondCheck(adds){
  return this.http.post('http://localhost:3001/insert_check',adds)
  .map(res=>res.json());
}
insertFrequency(adds){
  return this.http.post('http://localhost:3001/insert',adds)
  .map(res=>res.json());
}
}
