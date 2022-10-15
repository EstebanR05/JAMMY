import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { APIJammy } from 'src/app/shared/interfaces/APIJammy';
import { UserService, UserServiceActionTap } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  data: any;

  constructor(
    public _userSerice: UserService,
  ) { }

  ngOnInit(): void {
    //aqui traigo los datos del servicio y lo almaceno en la variable datos
    this._userSerice.getAll().subscribe(res => {
       this.data = res[0];
    })
    console.log(this.data)
  }

}
