import { DepartementsComponent } from './../departements.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementService } from './../../../../core/services/admin/departement.service';
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
    public MatDialogRef: MatDialogRef<DepartementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private DepartService: DepartementService
  ) {
    this.receivedRow = data

  }

  ngOnInit(): void {
    this.getEtudiatnByDepartement(this.receivedRow.departement.id)
  }

  getEtudiatnByDepartement(id: number) {
    this.DepartService
      .get('getEtudiantsByDepartement/' + id)
      .subscribe((etudiants) => this.etudiants = etudiants)
  }

  deleteEtudiant(elementId: number) {
    this.DepartService
      .delete('deleteEtudiant', elementId)
      .subscribe(() => {})
      location.reload()
      ;
  }

}
