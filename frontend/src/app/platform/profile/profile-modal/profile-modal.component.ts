import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  id: any;
  form!: FormGroup;

  @Input() modal: any;
  @Output() data: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _form: FormBuilder,
    private _UserService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this._form.group({
      nombre: ['', [Validators.required]],
      info:['', [Validators.required]],
      f_inicial:['', [Validators.required]],
      f_final:['', [Validators.required]],
      id: [this._UserService.valorID]
    });
  }

  submit() {
    this._UserService.AgregarTarea(this.form.value).subscribe(() => {
      return this.modal;
    })
  }

}
