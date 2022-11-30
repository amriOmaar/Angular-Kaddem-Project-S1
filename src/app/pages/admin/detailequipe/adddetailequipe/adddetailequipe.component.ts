import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-adddetailequipe',
  templateUrl: './adddetailequipe.component.html',
  styleUrls: ['./adddetailequipe.component.css']
})
export class AdddetailequipeComponent implements OnInit {
  detailequipeForm!: FormGroup;
  salle!: FormControl;
  thematique!: FormControl;

  constructor(  private apiService: ApiService,
    public dialogRef: MatDialogRef<AdddetailequipeComponent>) {  this.initForm();
      this.createForm();}

  ngOnInit(): void {
  }
  initForm() {
    ;
      this.salle = new FormControl('', [Validators.required]);
      this.thematique = new FormControl('', [Validators.required]);
    }
  
    createForm() {
      this.detailequipeForm = new FormGroup({
  
        salle: this.salle,
        thematique: this.thematique,
      });
    }
  
    onSubmit() {
      const deatilequipeToAdd = {
        salle: this.detailequipeForm.value.salle,
        thematique: this.detailequipeForm.value.thematique,
      };
      this.addDetailEquipe(deatilequipeToAdd);
      this.resetControls();
      this.closeDialog();
      location.reload();
    }
  
    addDetailEquipe(detailequipeBody: Object) {
      this.apiService.add('addEquipeDE', detailequipeBody).subscribe((detailequipe) => null);
    }
  
    resetControls() {
      this.detailequipeForm.reset();
    }
  
    closeDialog() {
      this.dialogRef.close();
    }
}
