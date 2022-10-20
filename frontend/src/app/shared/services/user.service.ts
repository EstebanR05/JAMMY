import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIJammy } from '../interfaces/APIJammy';

export const UserServiceActionTap: Subject<any> = new Subject<any>(); 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  valorID!: string;

  public setID(id:string) {
    this.valorID = id;
  }

  ApiUrl: string = 'http://localhost/usuarios/api.php';

  APItareas: string = 'http://localhost/tareas/tareas.php';

  constructor(
    private HttpUsuarios: HttpClient
  ) { }

  getAll():Observable<any> {
    return this.HttpUsuarios.get<APIJammy>(this.ApiUrl);
  }

  tareas() {
    return this.HttpUsuarios.get(this.APItareas+'?consultar='+this.valorID);
  }
}
