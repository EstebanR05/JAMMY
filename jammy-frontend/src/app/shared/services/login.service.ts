import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../interfaces/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl:string = 'http://localhost/usuarios/';

  
  constructor( private HttpUsuarios:HttpClient) {

   }


   VerificarUsuario(datosUser: LoginInterface):Observable<any> {
    
    return this.HttpUsuarios.post<LoginInterface>(`${this.ApiUrl}?consultar=1`, datosUser);
   }
}
