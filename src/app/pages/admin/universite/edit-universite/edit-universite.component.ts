import { ToastrService } from 'ngx-toastr';
import { DepartementService } from './../../../../core/services/admin/departement.service';
import { UniversiteComponent } from './../universite.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-universite',
  templateUrl: './edit-universite.component.html',
  styleUrls: ['./edit-universite.component.css']
})
export class EditUniversiteComponent implements OnInit {

  universiteForm!: FormGroup;
  nomUniv!: FormControl;
  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<UniversiteComponent>,
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
    this.nomUniv = new FormControl(this.receivedRow.universite.nomUniv, [
      Validators.required,
    ]);
  }

  createForm() {
    this.universiteForm = new FormGroup({
      nomUniv: this.nomUniv,
    });

  }

  resetControls() {
    this.universiteForm.reset();
  }

  upadteDepartement(idUniv: number) {
    const universiteUpdated = {
      id: idUniv,
      nomUniv: this.universiteForm.value.nomUniv,
    };
    this.departService
      .update('updateUniversite', idUniv, universiteUpdated)
      .subscribe(() => {
        this.toastrService.success("Universite bien modifié")
        this.closeDialog();
        location.reload();

      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
