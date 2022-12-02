import { DepartementService } from './../../../core/services/admin/departement.service';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddUniversiteComponent } from './add-universite/add-universite.component';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {

  constructor(private departService: DepartementService, private dialog: MatDialog) { }

  universites!: any;

  ngOnInit(): void {
    this.getUniversites()
  }


  getUniversites() {
    this.departService
      .get('universites')
      .subscribe((universites) => (this.universites = universites));
  }

  deleteUniversite(elementId: number) {
    this.departService
      .delete('deleteUniversite/', elementId)
      .subscribe(() => location.reload());
  }

  openAddUniversiteDialog() {
    this.dialog.open(AddUniversiteComponent, { width: '40%' });
  }

  openEditUniversiteDialog(universite: Object) {
    this.dialog.open(EditUniversiteComponent, {
      width: '40%',
      data: { universite },
    });
  }

}
