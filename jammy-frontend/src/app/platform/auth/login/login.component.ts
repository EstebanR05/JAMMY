import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formUsuario!: FormGroup;

  constructor(private servicio: LoginService,
    private form: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formUsuario = this.form.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });
  }

  submit() {
    this.servicio.VerificarUsuario(this.formUsuario.value).subscribe(() => {
      this.router.navigateByUrl('auth/profile');
    })
  }

}
