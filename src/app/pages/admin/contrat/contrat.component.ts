import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import{pdfMake} from 'pdfmake/build/pdfMake';
import { style } from '@angular/animations';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';
import { ToastrService } from 'ngx-toastr';
import { PdfService } from 'src/app/core/services/pdf.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css'],
})
export class ContratComponent implements OnInit {
  constructor(private apiService: ApiService, private dialog: MatDialog, private contratService :ContratService,  private toastr: ToastrService,private pdfService: PdfService) {}

  ngOnInit(): void {
    this.getContrats();
  }

  contrats!: any;
  specialite !:any;

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
    this.dialog.open(AddContratComponent, { width: '40%' });
  }

  openEditContratDialog(contrat: Object) {
    this.dialog.open(EditContratComponent, {
      width: '40%',
      data: { contrat },
    });
  }
 
  generatePdf() {
    this.pdfService.generatePdf();
  }
  

}
