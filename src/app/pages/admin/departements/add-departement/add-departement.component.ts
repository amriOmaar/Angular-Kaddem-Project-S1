import { DepartementService } from './../../../../core/services/admin/departement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementsComponent } from './../departements.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {


  departementForm!: FormGroup;
  nomDepart!: FormControl;

  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<DepartementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departService: DepartementService
    ) {
      this.receivedRow = data;
      this.initForm();
      this.createForm();
    }

  ngOnInit(): void {
  }

  initForm() {
       this.nomDepart = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: new FormControl('',[Validators.required,
                                    Validators.pattern("^departement +[a-zA-Z ]*"),
                                    Validators.minLength(15)])
    });
  }

  onSubmit() {
    const departementToAdd = {
      nomDepart: this.departementForm.value.nomDepart,
    };
    this.addDepartement(departementToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addDepartement(departBody: Object) {
    this.departService.add('addDepart', departBody).subscribe((departement) => null);
  }

  resetControls() {
    this.departementForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
