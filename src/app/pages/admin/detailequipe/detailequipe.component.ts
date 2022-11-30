import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { AdddetailequipeComponent } from './adddetailequipe/adddetailequipe.component';

@Component({
  selector: 'app-detailequipe',
  templateUrl: './detailequipe.component.html',
  styleUrls: ['./detailequipe.component.css']
})
export class DetailequipeComponent implements OnInit {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.getDetailEquipes();

  }
  detailequipes!: any;

  getDetailEquipes() {
    this.apiService
      .get('getAllDetail')
      .subscribe((detailequipes) => (this.detailequipes = detailequipes));
  }

  deleteDetailEquipe(elementId: number) {
    this.apiService
      .delete('deleteDetatilEquipe', elementId)
      .subscribe(() => location.reload());
  }

  openAddEquipeDialog() {
    this.dialog.open(AdddetailequipeComponent, { width: '40%' });
  }

 

}
