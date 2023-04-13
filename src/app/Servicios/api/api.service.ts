import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginI} from '../../Modelos/login.interface';
import {ResponseI} from '../../Modelos/response.interface';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/api/";

  constructor(private httpClient:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login";
    return this.httpClient.post<ResponseI>(direccion,form);
  }
}
