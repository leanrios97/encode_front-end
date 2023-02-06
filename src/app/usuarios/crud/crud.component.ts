import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Usuarios } from '../../models/usuarios.models'
import { ServiUsuariosService } from '../../service/usuarios.service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  usuarios: Usuarios[] = []
  titles: string [] = [
    'Nombre',
    'Apellido',
    'Correo Electronico',
    'Fecha de nacimiento',
    'Telefono',
    'Pais de Residencia',
    'Ser contactado',
  ];

  @Output() irFormulario = new EventEmitter();

  constructor(
    private serviceUsuarios: ServiUsuariosService
    ){
  }


  ngOnInit(): void{

    this.serviceUsuarios.listarEmpleados()
    .subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

  // listarEmpleados(){
  //   this.http.get <Usuarios[]>(
  //     'https://localhost:7111/api/UsuariosControllers'
  //   )
  //   .subscribe(
  //     (res) => {
  //       console.log('res',res);
  //       this.usuarios = res;
  //     },
  //     (err) =>console.log(err)
  //     );
  // }

}
