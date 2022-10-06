import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API:string = 'http://localhost/usuarios/';
  constructor( private HttpUsuarios:HttpClient) {

   }


   VerificarUsuario(datos: LoginInterface):Observable<any> {
    return this.HttpUsuarios.get(this.API + "?consultar=" + datos)
   }
}
