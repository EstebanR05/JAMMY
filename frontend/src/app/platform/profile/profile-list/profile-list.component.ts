import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public datos: any;

  constructor(
    private _userSerice: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var ID = parseInt(this._userSerice.valorID);
    if (isNaN(ID)) {
      alert('No has iniciado sesion, vuelve al login para hacerlo');
      this.router.navigateByUrl('auth/login');
    } else {
          //aqui traigo los datos del servicio y lo almaceno en la variable datos
      this._userSerice.getAll().subscribe(res => {
      this.datos = res[ID - 1];
      })
    }
  }

}
