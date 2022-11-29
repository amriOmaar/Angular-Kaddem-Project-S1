import { DepartementComponent } from './../departement.component';
import { Departement } from './../../../../core/model/Departement';
import { ApiService } from './../../../../core/services/admin/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddContratComponent } from './../../contrat/add-contrat/add-contrat.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departementForm!: FormGroup;
  nomDepart!: FormControl;
  chefDepart!: FormControl;

  receivedRow: any;


  // pattern1 =  "[a-zA-Z]";

  constructor(
    public dialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
    ) {
      this.receivedRow = data;
      this.initForm();
      this.createForm();
    }

  ngOnInit(): void {
  }

  initForm() {

    // this.departementForm = this.formBuilder.group({
    //   // this.nomDepart = new FormControl('', [Validators.required]);
    //   nomDepart : new FormControl ('', [Validators.required, Validators.pattern('^[a-zA-Z]')])

    // });

   this.nomDepart = new FormControl('', [Validators.required]);
   this.chefDepart = new FormControl('', [Validators.required]);

  }

  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: this.nomDepart,
      chefDepart: this.chefDepart,
    });
  }

  onSubmit() {
    const departementToAdd = {
      nomDepart: this.departementForm.value.nomDepart,
      chefDepart: this.departementForm.value.chefDepart,
    };
    this.addDepartement(departementToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addDepartement(departBody: Object) {
    this.apiService.add('addDepart', departBody).subscribe((departement) => null);
  }

  resetControls() {
    this.departementForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
