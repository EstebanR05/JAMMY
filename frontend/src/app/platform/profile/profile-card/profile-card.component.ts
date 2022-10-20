import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  tarea = [
    {
      NombreTarea: 'la segunda guerra mundial',
      informacionTarea: 'buscar sus causas',
      fechaInicial: '10-10-22',
      fechaFinal: '25-10-22'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  //modal
  selected$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  modalDisplay$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  subscription!: Subscription;

  openModal() {
    this.modalDisplay$.next("block");
  }

  closeModal() {
    this.selected$.next(null);
    this.modalDisplay$.next("none");
    this.subscription.unsubscribe();
  }

  delete(){}

}
