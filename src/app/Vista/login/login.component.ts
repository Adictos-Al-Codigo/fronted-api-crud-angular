import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from 'src/app/Servicios/api/api.service';
import {LoginI} from '../../Modelos/login.interface';
import {ResponseI} from '../../Modelos/response.interface';
import {Router} from '@angular/router'
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
  constructor(private apiService:ApiService,private router:Router){

  }

  ngOnInit(){

  }

  onLogin(form:any){
    this.apiService.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if (dataResponse.status == "ok") {
        localStorage.setItem("token",dataResponse.accesToken);
        this.router.navigate(['Dashboard']);
      }
    })
  }
}
