import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuarios, CreateUsuariosDTO } from '../models/usuarios.models';


@Injectable({
  providedIn: 'root'
})
export class ServiUsuariosService {

  private apiUrl = 'https://localhost:7111/api/UsuariosControllers'

  constructor(private http: HttpClient) { }

  listarEmpleados(){
    return this.http.get<Usuarios[]>(this.apiUrl);
  }

  create(data: CreateUsuariosDTO) {
    return this.http.post<CreateUsuariosDTO>(this.apiUrl, data);
  }
}
