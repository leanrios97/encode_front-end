import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CreateUsuariosDTO, Usuarios } from '../../models/usuarios.models';
import { ServiUsuariosService } from '../../service/usuarios.service';
import  { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //  @Input() usuario: CreateUsuariosDTO = {

  //    nombre: '',
  //   apellido: '',
  //   correoElectronico: '',
  //   // fechaNacimiento: Date(),
  //   telefono: '',
  //   paisResidencia: '',
  //   serContactado:
  // }

  // @Output() addUsuario = new EventEmitter<Usuarios> ();
  // constructor(
  //   private serviceUsuarios: ServiUsuariosService
  //   ){
  // }

  // ngOnInit() {

  // //   createNewUsuario(usuario) {

  // //     const usuario: CreateUsuariosDTO = {
  // //       nombre: '',
  // //       apellido: '',
  // //       correoElectronico: '',
  // //       // fechaNacimiento: Date(),
  // //       telefono: '',
  // //       paisResidencia: '',
  // //       serContactado: Boolean(),
  // //     },

  // //     this.serviceUsuarios.create(usuario);
  // //     .subscribe(data => {
  // //       console.log('creado',data),
  // //       this.usuario = data;
  // //     });
  // //   }
  // // }



  //   GetId(id:number){
  //     console.log('id',id);
  //     this.id=id;
  //   return id;
  //   }

 
  //   regForm = new FormGroup({
  //     id: new FormControl(this.id),
  //     nombre: new FormControl(''),
  //     apellido: new FormControl('')
  //     correoElectronico: new FormControl('')
  //     fechaNacimiento: new FormControl('')
  //     telefono:new FormControl(''),
  //     paisResidencia: new FormControl('')
  //     serContactado: new FormControl()
      

      
  //   });
  //   EditarReg(){
      
  //     var id= this.GetId(this.id);
    
  //     console.log(this.regForm.value);
  //     this.http.put<SearchExpedientesResponse>(`${this.url}/update/${id}`,this.regForm.value).subscribe((resp)=>{
    
  //       this.service.TraerDatos();
  //       console.log('editado',resp);
  //     })
  //     alert('Registro editado');
  //   }
  // }
}
