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
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private _form: FormBuilder,
    private _data: UserService
  ) { }

  ngOnInit(): void {
    this.form = this._form.group({
      nombre: ['', [Validators.required]],
      info:['', [Validators.required]],
      hinicial:['', [Validators.required]],
      hentrega:['', [Validators.required]]
    });
  }

  submit() { }

}
