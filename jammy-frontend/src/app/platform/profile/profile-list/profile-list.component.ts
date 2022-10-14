import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public datos: any;

  constructor(
    public _userSerice: UserService,
  ) { }

  ngOnInit(): void {
    this._userSerice.getAll().subscribe(res => {
      console.log(res)
    })
  }

}
