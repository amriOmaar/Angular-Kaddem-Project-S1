import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<AdddetailequipeComponent>) {  
      }
  ngOnInit(): void {
    this.detailequipe= new DetailEquipe()
  }


     
  
  
  
    onSubmit(form : NgForm) {
 
        this.apiService.add('addEquipeDE',this.detailequipe).subscribe((equipe) => null);
        location.reload()
    }
  
    addDetailEquipe(detailequipeBody: Object) {
      this.apiService.add('addEquipeDE', detailequipeBody).subscribe((detailequipe) => null);
    }
  

    closeDialog() {
      this.dialogRef.close();
    }
}
