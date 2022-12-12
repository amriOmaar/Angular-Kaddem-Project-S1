import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { AddEquipesComponent } from './add-equipes/add-equipes.component';
import { EditEquipesComponent } from './edit-equipes/edit-equipes.component';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  nbrPage: number
  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  nomEqui!: any;

  ngOnInit(): void {
    this.getEquipes();
  }

  equipes!: any;

  getEquipes() {
    this.apiService
      .get('getEquipes')
      .subscribe((equipes) => (this.equipes = equipes));
  }

  deleteEquipe(elementId: number) {
    this.apiService
      .delete('deleteEquipe', elementId)
      .subscribe(() => location.reload());
  }

  openAddEquipeDialog() {
    this.dialog.open(AddEquipesComponent, { width: '40%' });
  }

  openEditEquipeDialog(equipes: Object) {
    this.dialog.open(EditEquipesComponent, {
      width: '30%',
      data: { equipes },
    });
  }
}
