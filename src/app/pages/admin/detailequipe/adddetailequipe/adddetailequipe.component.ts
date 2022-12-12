import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { DetailEquipe } from 'src/app/core/model/DetailEquipe';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-adddetailequipe',
  templateUrl: './adddetailequipe.component.html',
  styleUrls: ['./adddetailequipe.component.css']
})
export class AdddetailequipeComponent  implements OnInit{
  submitted: boolean;
  public detailequipe:DetailEquipe;
  constructor(  private apiService: ApiService,
    public dialogRef: MatDialogRef<AdddetailequipeComponent>,    private _service: NotificationsService) {  
      }
  ngOnInit(): void {
    this.detailequipe= new DetailEquipe()
  }


       
onSucess(message){
  this._service.success('sucess', message,{
    position:['bottom','right'],
    timeOut:2000,
    animate: 'fade',
    showProgressBar: true
  });
  }
  
  
  
    onSubmit(form : NgForm) {
 
        this.apiService.add('AddDetailEquipe',this.detailequipe).subscribe((equipe) => null);
        location.reload()
    }
  
  

    closeDialog() {
      this.dialogRef.close();
    }
}
