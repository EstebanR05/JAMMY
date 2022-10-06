import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIJammy } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  ApiUrl: string = 'http://localhost/usuarios/';

  constructor(
    private HttpUsuarios: HttpClient
  ) { }

  AgregarUsuario(datos: APIJammy):Observable<any> {
    return this.HttpUsuarios.post(this.ApiUrl + '?insertar=1', datos);
  }

}
