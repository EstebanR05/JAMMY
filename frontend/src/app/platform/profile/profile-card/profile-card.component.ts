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
  constructor(public _userService: UserService) { }

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

  delete(id: string){
    console.log(id)
  }

}
