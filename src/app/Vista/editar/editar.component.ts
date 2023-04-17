import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserI } from 'src/app/Modelos/user.interface';
import { ApiService } from 'src/app/Servicios/api/api.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'; 

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private apiService:ApiService){

  }

  tipoUser:any;
  datosUsers!:UserI;

  editarForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    id_tipo_usuario: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    let UserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getUser(UserId).subscribe(data => {
      let user:UserI = data;
      this.editarForm.setValue({
        'name' : user.name,
        'email' : user.email,
        'id_tipo_usuario' : user.id_tipo_usuario,
      });
    });


    this.show_type_user();

  }

  show_type_user(){
    this.apiService.showTypeUser().subscribe(data =>{
      this.tipoUser = data;
    });
  }

  update(form:any){
    let UserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.updateUser(form,UserId).subscribe(data => {
      console.log(data);
    });
  }
}
