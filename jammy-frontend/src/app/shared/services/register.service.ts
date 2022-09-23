import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIJammy } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  ApiUrl: string = 'http://localhost/usuarios/api.php';

  constructor(
    private _HttpUsuarios: HttpClient
  ) { }

  AgregarUsuario(datos: string): Observable<APIJammy[]> {
    const url = `${ this.ApiUrl }/usuarios/${ datos }`;
    return this._HttpUsuarios.get<APIJammy[]>(url);
  }

}
