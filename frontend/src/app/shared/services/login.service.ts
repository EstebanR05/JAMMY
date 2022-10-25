import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../interfaces/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl:string = 'http://localhost/JAMMY/backend/PHP/usuarios/api.php';
  constructor( private HttpUsuarios:HttpClient) {

   }

   get isCreated():boolean {
    return !!this.VerificarUsuario
   }


   VerificarUsuario(datosUser: LoginInterface):Observable<any> {
    return this.HttpUsuarios.post<LoginInterface>(`${this.ApiUrl}?consultar=1`, datosUser);
   }

}
