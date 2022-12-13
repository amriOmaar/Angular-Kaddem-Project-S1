import { ApiService } from './../../../core/services/admin/api.service';
import { DepartementService } from './../../../core/services/admin/departement.service';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Output } from '@angular/core';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universites!: any;


  @Output() messageChild = new EventEmitter();
  @Output() incrementLikeEvent = new EventEmitter();

  constructor(private departService: DepartementService,
    private apiService: ApiService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUniversites()
  }


  getUniversites() {
    this.departService
      .get('getUniversite')
      .subscribe((universites) => (this.universites = universites));
  }

  deleteUniversite(elementId: number) {
    this.departService
      .delete('deleteUniversite', elementId)
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
