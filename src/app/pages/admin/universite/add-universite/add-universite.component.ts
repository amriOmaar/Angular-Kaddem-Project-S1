import { Universite } from './../../../../core/model/Universite';
import { ToastrService } from 'ngx-toastr';
import { UniversiteComponent } from './../universite.component';
import { DepartementService } from './../../../../core/services/admin/departement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  universiteForm!: FormGroup;
  nomUniv!: FormControl;
  receivedRow: any;


  constructor(
    public dialogRef: MatDialogRef<UniversiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departService: DepartementService,
    private toastrService: ToastrService
    ) {
      this.receivedRow = data;
      this.initForm();
      this.createForm();
    }

  ngOnInit(): void {
  }

  initForm() {
    this.nomUniv = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.universiteForm = new FormGroup({
      nomUniv: new FormControl('',[Validators.required,
                                    Validators.pattern("^[a-zA-Z ]*"),
                                    Validators.minLength(3)])
    });
  }

  onSubmit() {
    const universityToAdd = {
      nomUniv: this.universiteForm.value.nomUniv,
    };
    this.addUniversity(universityToAdd);
    this.toastrService.success("Universite bien ajouté")
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addUniversity(universiteBody: Object) {
    this.departService.add('saveUniversite', universiteBody).subscribe((universite) => null);
  }

  resetControls() {
    this.universiteForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}

