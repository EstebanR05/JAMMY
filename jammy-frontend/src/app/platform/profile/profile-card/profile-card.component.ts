import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //modal
  selected$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  modalDisplay$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  subscription!: Subscription;

  openModal(id:any) {
    this.selected$.next({ id });
    this.modalDisplay$.next("block");
  }

  closeModal() {
    this.selected$.next(null);
    this.modalDisplay$.next("none");
    this.subscription.unsubscribe();
  }

}
