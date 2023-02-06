export  interface Usuarios {
  id: number;
  nombre: string;
  apellido: string;
  correoElectronico: string,
  fechaNacimiento: Date,
  telefono: string,
  paisResidencia: string,
  serContactado: boolean
}

export interface CreateUsuariosDTO extends Omit<Usuarios, 'id' | 'fechaNacimiento'> {

}
