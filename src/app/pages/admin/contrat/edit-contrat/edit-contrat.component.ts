import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContratComponent } from '../contrat.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css'],
})
export class EditContratComponent implements OnInit {
  contratForm!: FormGroup;
  dateDebutContrat!: FormControl;
  dateFinContrat!: FormControl;
  specialite!: FormControl;
  archive!: FormControl;

  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<ContratComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.dateDebutContrat = new FormControl(
      this.receivedRow.contrat.dateDebutContrat,
      [Validators.required]
    );
    this.dateFinContrat = new FormControl(this.receivedRow.contrat.dateFinContrat, [
      Validators.required,
    ]);
    this.specialite = new FormControl(this.receivedRow.contrat.specialite, [
      Validators.required,
    ]);
    this.archive = new FormControl(this.receivedRow.contrat.archive);
  }

  createForm() {
    this.contratForm = new FormGroup({
      dateDebutContrat: this.dateDebutContrat,
      dateFinContrat: this.dateFinContrat,
      specialite: this.specialite,
      archive: this.archive,
    });
  }

  resetControls() {
    this.contratForm.reset();
  }

  upadteContrat(idContrat: number) {
    const contratUpdated = {
      id: idContrat,
      dateDebutContrat: this.contratForm.value.dateDebutContrat,
      dateFinContrat: this.contratForm.value.dateFinContrat,
      specialite: this.contratForm.value.specialite,
      archive: this.contratForm.value.archive,
    };
    this.apiService
      .update('update', idContrat, contratUpdated)
      .subscribe(() => {
        this.closeDialog();
        location.reload();
        this.toastr.error('Contrat Modifié', 'Modification',{
          timeOut: 60000,positionClass: 'toast-top-right'
        });
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
