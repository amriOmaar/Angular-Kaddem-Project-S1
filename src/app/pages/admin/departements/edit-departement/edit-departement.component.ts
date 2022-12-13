import { ToastrService } from 'ngx-toastr';
import { DepartementService } from './../../../../core/services/admin/departement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementsComponent } from './../departements.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent implements OnInit {
  departementForm!: FormGroup;
  nomDepart!: FormControl;
  chefDepart!: FormControl;
  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<DepartementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departService: DepartementService,
    private toastrService: ToastrService) {

    this.receivedRow = data;
    this.initForm();
    this.createForm();
     }

  ngOnInit(): void {
  }

  initForm() {
    this.nomDepart = new FormControl(this.receivedRow.departement.nomDepart, [
      Validators.required,
    ]);
    this.chefDepart = new FormControl(this.receivedRow.departement.chefDepart, [
      Validators.required,
    ]);
  }

  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: this.nomDepart,
      chefDepart: this.chefDepart,
    });

  }

  resetControls() {
    this.departementForm.reset();
  }

  upadteDepartement(idDepart: number) {
    const departementUpdated = {
      idDepart: idDepart,
      nomDepart: this.departementForm.value.nomDepart,
      chefDepart: this.departementForm.value.chefDepart,
    };
    this.departService
      .update('updateDepart', idDepart, departementUpdated)
      .subscribe(() => {
        this.toastrService.success("Departement bien modifié")
        this.closeDialog();
        location.reload();

      });
  }

  closeDialog() {
    this.dialogRef.close();
  }




}
