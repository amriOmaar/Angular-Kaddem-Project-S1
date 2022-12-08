import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/admin/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AddEquipeComponent} from "./add-equipe/add-equipe.component";
import {UpdateEquipeComponent} from "./update-equipe/update-equipe.component";


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  nomEqui!: any;
  ngOnInit(): void {
    this.getEquipes();
  }

  equipes!: any;

  getEquipes() {
    this.apiService
      .get('getAllEquipe')
      .subscribe((equipes) => (this.equipes = equipes));
  }

  deleteEquipe(elementId: number) {
    this.apiService
      .delete('deleteEquipe', elementId)
      .subscribe(() => location.reload());
  }

  openAddEquipeDialog() {
    this.dialog.open(AddEquipeComponent, { width: '40%' });
  }

  openEditEquipeDialog(equipes: Object) {
    this.dialog.open(UpdateEquipeComponent, {
      width: '30%',
      data: { equipes },
    });
  }

}
