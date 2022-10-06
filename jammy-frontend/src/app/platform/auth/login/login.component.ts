import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formUsuario!: FormGroup;

  constructor(private servicio: LoginService,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario = this.form.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });
  }

  submit() {
    this.servicio.VerificarUsuario(this.formUsuario.value)
  }

}
