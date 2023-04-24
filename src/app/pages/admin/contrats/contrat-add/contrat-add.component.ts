import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-contrat-add',
  templateUrl: './contrat-add.component.html',
  styleUrls: ['./contrat-add.component.css']
})
export class ContratAddComponent implements OnInit {

  contratForm!: FormGroup;
  dateDebutContrat!: FormControl;
  dateFinContrat!: FormControl;
  specialite!: FormControl;
  archive!: FormControl;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<ContratAddComponent>,
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
