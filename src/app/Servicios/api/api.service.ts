import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginI} from '../../Modelos/login.interface';
import {ResponseI} from '../../Modelos/response.interface';
import { ListaUserI } from 'src/app/Modelos/lista_users.interface';
import {Observable} from 'rxjs'
import { UserI } from 'src/app/Modelos/user.interface';
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

  get_All_users():Observable<ListaUserI[]>{
    let direccion = this.url + "user"
    return this.httpClient.get<ListaUserI[]>(direccion);
  }

  getUser(id:any):Observable<UserI>{
    let direccion = this.url + "user/" + id + "/edit";
    return this.httpClient.get<UserI>(direccion);
  }

  // creación del servicio guardar

  guardarUsuario(form:any){
    let data = new FormData();
    let direccion = this.url + "user"
    data.append('url_imagen',form.url_imagen);
    data.append('name',form.name.toString());
    data.append('email',form.email.toString());
    data.append('password',form.password.toString());
    data.append('id_tipo_usuario',form.id_tipo_usuario.toString());
    
    return this.httpClient.post<any>(direccion,data);
  }

  eliminarUsuario(id:number){
    let direccion = this.url + "user/" + id;
    return this.httpClient.delete<any>(direccion);
  }

  showTypeUser(){
    let direccion = this.url + "type_users";
    return this.httpClient.get<any>(direccion);
  }

  updateUser(_form:UserI,id:any){
    let direccion = this.url+"user/"+id;
    return this.httpClient.put<any>(direccion,_form);
  }
}
