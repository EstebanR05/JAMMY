import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  tarea:any;
  id:any;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.tareas().subscribe(respuesta => {
      this.tarea = respuesta;
    })
  }

  //modal
  selected$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  modalDisplay$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  subscription!: Subscription;

  
  openModal(e:any) {
    this.selected$.next({e})
    this.modalDisplay$.next("block");
  }

  closeModal() {
    this.selected$.next(null);
    this.modalDisplay$.next("none");
    this.subscription.unsubscribe();
  }

  borrar(id: any, iControl: any){
    if (window.confirm("¿Deseas eliminar realmente esta tarea?")) {
      this._userService.BorrarTarea(id).subscribe(() => {
        this.tarea.splice(iControl,1);
      });
    }
  }

}
