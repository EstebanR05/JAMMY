import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API:string = 'http://localhost/usuarios/';
  constructor( private HttpUsuarios:HttpClient) {

   }


   VerificarUsuario(correo:any) {
    return this.HttpUsuarios.get(this.API + "?correo=" + correo);
   }
}
