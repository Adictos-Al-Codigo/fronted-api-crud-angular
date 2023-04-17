import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Servicios/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  public form!:FormGroup;
  file:File | any;
  fileSelect:any;

  // muchos tipos de validators 

  constructor (private formBuilder:FormBuilder, private apiService:ApiService, private router:Router){
    this.form = this.formBuilder.group({
      url_imagen: ['',[Validators.required]],
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      id_tipo_usuario: ['',[Validators.required]]
    })
  }

  obtenerFoto(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.fileSelect = reader.result;
    }
    this.file = (event.target).files[0];
  }

  guardar(){
    if (this.file) {
      this.form.controls['url_imagen'].setValue(this.file.name);
      if (this.form.valid) {
        let data = {
          url_imagen: this.file, 
          name: this.form.value.name,
          email: this.form.value.email,
          password: this.form.value.password,
          id_tipo_usuario: this.form.value.id_tipo_usuario
        }
        this.apiService.guardarUsuario(data).subscribe({
          next:(s) =>{
            console.log(s);
            this.router.navigate(['Dashboard'])
          },
          error:(err) =>{
            console.log(err);
          }
        })
      }else{
        this.form.markAllAsTouched()
      }
    }else{
      alert("La imagen es requerida.");
    }
  }
}
