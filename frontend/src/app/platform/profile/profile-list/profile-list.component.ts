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
  file: any;
  imagen: any;
  file_data:any='';

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
      this.imagen = 'assets/subidas/' + this.datos.imagen;
      })
    }

  }

  upload(event:any) {
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 4 mb
        if((file.size/1048576)<=4)
        {
          let formData = new FormData();
          formData.append('file', file, file.name);
          formData.append('id', this._userSerice.valorID);
          this.file_data=formData;
          this.submit();
          window.location.reload();
        }
    
  }

}
submit() {
  if (this.file_data != '') {
    this._userSerice.EnviarImagen(this.file_data).subscribe((res) => {
      console.log(res);
    });
  }
}

}
