import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ListaUsers:any;
  token:any;

  constructor(private apiService:ApiService) {
    
  }

  ngOnInit(): void {
    
    this.apiService.get_All_users().subscribe({
      next: (s) =>{

        console.log(s);
      },
      error: (err) =>{
        debugger;
      }
    })
  }
}
