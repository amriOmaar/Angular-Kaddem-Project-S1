import { Component, Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { EquipeComponent } from '../equipe.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  equipeForm!: FormGroup;
  niveau!: FormControl;
  nomEquipe!: FormControl;
  receivedRow: any;

  constructor( 
    public dialogRef: MatDialogRef<EquipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) {  
      this.receivedRow = data;
      this.initForm();
      this.createForm();
    }

  ngOnInit(): void {
  }
  initForm() {
    this.niveau = new FormControl(
      this.receivedRow.equipes.niveau,
      [Validators.required]
    );
    this.nomEquipe = new FormControl(this.receivedRow.equipes.nomEquipe, [
      Validators.required,
    ]);

  }

  createForm() {
    this.equipeForm = new FormGroup({
    niveau: this.niveau,
    nomEquipe: this.nomEquipe,

    
    });
  }

  resetControls() {
    this.equipeForm.reset();
  }

  upadteEquipe(equipId: number) {
    const EquipUpdated = {
      id: equipId,
      niveau: this.equipeForm.value.niveau,
      nomEquipe: this.equipeForm.value.nomEquipe,
      
    };
    this.apiService
      .update('upadateEquipe', equipId, EquipUpdated)
      .subscribe(() => {
        this.closeDialog();
        location.reload();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
