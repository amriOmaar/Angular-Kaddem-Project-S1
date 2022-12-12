import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { EquipeComponent } from '../../equipe/equipe.component';

@Component({
  selector: 'app-edit-equipes',
  templateUrl: './edit-equipes.component.html',
  styleUrls: ['./edit-equipes.component.css']
})
export class EditEquipesComponent implements OnInit {
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
