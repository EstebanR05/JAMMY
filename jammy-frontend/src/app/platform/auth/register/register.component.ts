import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUsuarios: FormGroup;
  constructor(public form: FormBuilder, private CrudService: RegisterService) { 
    this.formUsuarios = this.form.group({
      nombre: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      correo: ['', [
        Validators.required,
        Validators.email
      ]],
      apellido: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      contrasena: ['' , [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  ngOnInit(): void {
  }

  sendDatos():any {
    this.CrudService.AgregarUsuario(this.formUsuarios.value);
  }
}
