import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API:string = 'http://localhost/usuarios/';
  constructor(private HttpUsuarios: HttpClient) { 
  }

  AgregarUsuario(datosUsuario:usuario):Observable<any> {
    return this.HttpUsuarios.post(this.API + "?insertar=1", datosUsuario);
  }


}
