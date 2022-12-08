import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContratComponent } from '../contrat.component';
import { Contrat } from 'src/app/core/model/contrat';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css'],
})
export class AddContratComponent implements OnInit {
  contratForm!: FormGroup;
  dateDebutContrat!: FormControl;
  dateFinContrat!: FormControl;
  specialite!: FormControl;
  archive!: FormControl;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddContratComponent>,
    private toastr: ToastrService
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.dateDebutContrat = new FormControl('', [Validators.required]);
    this.dateFinContrat = new FormControl('', [Validators.required]);
    this.specialite = new FormControl('', [Validators.required]);
    this.archive = new FormControl('');
  }

  createForm() {
    this.contratForm = new FormGroup({
      dateDebutContrat: this.dateDebutContrat,
      dateFinContrat: this.dateFinContrat,
      specialite: this.specialite,
      archive: this.archive,
    });
  }

  onSubmit() {
    const contratToAdd = {
      dateDebutContrat: this.contratForm.value.dateDebutContrat,
      dateFinContrat: this.contratForm.value.dateFinContrat,
      specialite: this.contratForm.value.specialite,
      archive: this.contratForm.value.archive,
    };
    this.addContrat(contratToAdd);
    this.resetControls();
    this.closeDialog();
    this.toastr.success('Contrat Ajouté avec succes', 'Ajout',{
      timeOut: 60000,positionClass: 'toast-top-right'
    });
    location.reload();
 

    
  }

  addContrat(contratBody: Object) {
    this.apiService.add('AddContrat', contratBody).subscribe((contrat) => null);
  }

  resetControls() {
    this.contratForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
