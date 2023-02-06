import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CreateUsuariosDTO, Usuarios } from '../../models/usuarios.models';
import { ServiUsuariosService } from '../../service/usuarios.service';
import {  } from '@angular/common/'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // @Input() usuario: CreateUsuariosDTO = {

  //   nombre: '',
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

  // ngOnInit(): void {

  //   createNewUsuario(usuario) {

  //     const usuario: CreateUsuariosDTO = {
  //       nombre: '',
  //       apellido: '',
  //       correoElectronico: '',
  //       // fechaNacimiento: Date(),
  //       telefono: '',
  //       paisResidencia: '',
  //       serContactado: Boolean(),
  //     },

  //     this.serviceUsuarios.create(usuario);
  //     .subscribe(data => {
  //       console.log('creado',data),
  //       this.usuario = data;
  //     });
  //   }
  // }
}
