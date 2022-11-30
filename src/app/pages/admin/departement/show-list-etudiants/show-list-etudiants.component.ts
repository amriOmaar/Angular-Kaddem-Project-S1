import { ApiService } from 'src/app/core/services/admin/api.service';
import { DepartementComponent } from './../departement.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list-etudiants',
  templateUrl: './show-list-etudiants.component.html',
  styleUrls: ['./show-list-etudiants.component.css']
})
export class ShowListEtudiantsComponent implements OnInit {

  receivedRow!: any
  etudiants!: any


  constructor(
    public MatDialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data

  }

  ngOnInit(): void {
    this.getEtudiatnByDepartement(this.receivedRow.departement.idDepart)
  }

  getEtudiatnByDepartement(idDepart: number) {
    this.apiService
      .get('getEtudiantsByDepartement/' + idDepart)
      .subscribe((etudiants) => this.etudiants = etudiants)
  }
  

}
