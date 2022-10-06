import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUsuarios!: FormGroup;

  constructor(
    public form: FormBuilder,
    private CrudService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formUsuarios = this.form.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      correo: ['', [Validators.required, Validators.email]],
      apellido: ['', [Validators.required, Validators.maxLength(15)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit():any{
    this.CrudService.AgregarUsuario(this.formUsuarios.value).subscribe(() => {
      this.router.navigateByUrl('auth/login');
    })
  }
}
