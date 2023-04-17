import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api/api.service';
import {Router} from '@angular/router';
import {ListaUserI} from '../../Modelos/lista_users.interface'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ListaUsers!:ListaUserI[];
  token:any;

  constructor(private apiService:ApiService, private route:Router) {
    
  }

  ngOnInit(): void {
    this.apiService.get_All_users().subscribe({
      next: (s) =>{
        this.ListaUsers = s;
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  editarUsuario(id:number){
    this.route.navigate(['Editar',id]);
  }

  agregarUsuario(){
    this.route.navigate(['Nuevo'])
  }

  eliminarUsuario(id:number){
    this.apiService.eliminarUsuario(id).subscribe();
    this.route.navigate(['Login']);
  }
}
