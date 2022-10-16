import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valorID: any;
  formUsuario!: FormGroup;

  constructor(private servicio: LoginService,
    private form: FormBuilder,
    private router: Router,
    private _userService: UserService) { }

  ngOnInit(): void {
    this.formUsuario = this.form.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });

  }

  sendValueIntoService(value: string) {
      this._userService.setID(value)
  }

  submit() {
    this.servicio.VerificarUsuario(this.formUsuario.value).subscribe((resp) => {
      this.sendValueIntoService(resp[0].user_id);
      this.router.navigateByUrl('auth/profile');
    })
  }

}
