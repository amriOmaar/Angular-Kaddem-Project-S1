import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { ContratService } from 'src/app/core/services/contrat.service';
import { PdfService } from 'src/app/core/services/pdf.service';
import { ContratEditComponent } from './contrat-edit/contrat-edit.component';
import { ContratAddComponent } from './contrat-add/contrat-add.component';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog, private contratService :ContratService,  private toastr: ToastrService,private pdfService: PdfService) {}

  ngOnInit(): void {
    this.getContrats();
  }

  contrats!: any;
  specialite !:any;
  nbrPage: number

  getContrats() {
    this.apiService
      .get('contrats')
      .subscribe((contrats) => (this.contrats = contrats));
     
  }

  deleteContrat(elementId: number) {
    this.apiService
      .delete('deleteContrat', elementId)
      .subscribe(() => location.reload());
      this.toastr.error('Contrat Supprimé', 'Suppression',{
        timeOut: 60000,positionClass: 'toast-top-right'
      });
      location.reload();
  }

  openAddContratDialog() {
    this.dialog.open(ContratAddComponent, { width: '40%' });
  }

  openEditContratDialog(contrat: Object) {
    this.dialog.open(ContratEditComponent, {
      width: '40%',
      data: { contrat },
    });
  }
 
  generatePdf() {
    this.pdfService.generatePdf();
  }
  


}
