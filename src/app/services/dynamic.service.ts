import { Injectable } from '@angular/core';
import * as Constants from '../common/constant';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(Constants.DYNAMIC_URL).map(res=>res.json());
  }
}
