import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ResponseI} from '../../Modelos/response.interface';
import {Router} from '@angular/router'
import { ApiService } from 'src/app/Servicios/api/api.service';
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

  errorStatus?:boolean;
  errorMsj?:any;

  constructor(private apiService:ApiService,private router:Router){

  }

  ngOnInit(){
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if (localStorage.getItem("token")) {
      this.router.navigate(['Dashboard']);
      debugger;
    }
  }

  onLogin(form:any){
    this.apiService.loginByEmail(form).subscribe({
      next: (s) =>{
        let dataResponse:ResponseI = s;
        localStorage.setItem("token",dataResponse.accesToken);
        this.router.navigate(['Dashboard']);
      },
      error: (err) =>{
        this.errorStatus = true;
        this.errorMsj = "Credenciales Inválidas"
        debugger;
      }
    })
  }
}
