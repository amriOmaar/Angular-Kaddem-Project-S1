import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { ContratsComponent } from '../contrats.component';

@Component({
  selector: 'app-contrat-edit',
  templateUrl: './contrat-edit.component.html',
  styleUrls: ['./contrat-edit.component.css']
})
export class ContratEditComponent implements OnInit {

  contratForm!: FormGroup;
  dateDebutContrat!: FormControl;
  dateFinContrat!: FormControl;
  specialite!: FormControl;
  archive!: FormControl;

  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<ContratsComponent>,
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
        this.toastr.warning('Contrat Modifié', 'Modification',{
          timeOut: 600000,positionClass: 'toast-top-right'
        });
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
