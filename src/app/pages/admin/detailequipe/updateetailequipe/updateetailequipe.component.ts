import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { DetailequipeComponent } from '../detailequipe.component';

@Component({
  selector: 'app-updateetailequipe',
  templateUrl: './updateetailequipe.component.html',
  styleUrls: ['./updateetailequipe.component.css']
})
export class UpdateetailequipeComponent implements OnInit {
  detailForm!: FormGroup;
  salle!: FormControl;
  thematique!: FormControl;
  receivedRow: any;

  constructor( 
  
  public dialogRef: MatDialogRef<DetailequipeComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService) {  
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

ngOnInit(): void {
}
initForm() {
  this.salle = new FormControl(
    this.receivedRow.detailequipes.salle,
    [Validators.required]
  );
  this.thematique = new FormControl(this.receivedRow.detailequipes.thematique, [
    Validators.required,
  ]);

}

createForm() {
  this.detailForm = new FormGroup({
    salle: this.salle,
    thematique: this.thematique,

  
  });
}

resetControls() {
  this.detailForm.reset();
}

upadteEquipe(equipId: number) {
  const EquipUpdated = {
    id: equipId,
    salle: this.detailForm.value.salle,
    thematique: this.detailForm.value.thematique,
    
  };
  this.apiService
    .update('upadateDetailEquipe', equipId, EquipUpdated)
    .subscribe(() => {
      this.closeDialog();
      location.reload();
    });
}

closeDialog() {
  this.dialogRef.close();
}
}
