import { DepartementService } from './../../../../core/services/admin/departement.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  universiteForm!: FormGroup;
  nomUniv!: FormControl;

  constructor(
    private DepartService: DepartementService,
    public dialogRef: MatDialogRef<AddUniversiteComponent>,
    private departService: DepartementService) { }

  ngOnInit(): void {
  }

  initForm() {
    this.nomUniv = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.universiteForm = new FormGroup({
      nomDepart: this.nomUniv,
    });
  }

  onSubmit() {
    const universiteToAdd = {
      nomUniv: this.universiteForm.value.nomUniv,
    };
    this.addUniversite(universiteToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addUniversite(universiteBody: Object) {
    this.departService.add('addUniv', universiteBody).subscribe((universite) => null);
  }

  resetControls() {
    this.universiteForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }



}
