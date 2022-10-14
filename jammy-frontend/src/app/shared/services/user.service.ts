import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIJammy } from '../interfaces/APIJammy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUrl: string = 'http://localhost/usuarios/api.php';

  constructor(
    private HttpUsuarios: HttpClient
  ) { }

  getAll(datos?: APIJammy):Observable<any> {
    return this.HttpUsuarios.get<APIJammy>(this.ApiUrl);
  }
}
