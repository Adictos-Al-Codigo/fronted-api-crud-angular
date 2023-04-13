import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from 'src/app/Servicios/api/api.service';
import {LoginI} from '../../Modelos/login.interface'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor(private apiService:ApiService){

  }

  ngOnInit(){

  }

  onLogin(form:any){
    this.apiService.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }
}
