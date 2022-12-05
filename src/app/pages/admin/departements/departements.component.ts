import { MatDialog } from '@angular/material/dialog';
import { DepartementService } from './../../../core/services/admin/departement.service';
import { Component, OnInit } from '@angular/core';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { ShowListEtudiantsComponent } from './show-list-etudiants/show-list-etudiants.component';
import { type } from 'os';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  constructor(private DepartService: DepartementService,
              private dialog: MatDialog)
              { }

  departements: any
  etudiants: any
  nomDepartement: any
  nbrPage: number

  ngOnInit(): void {
    this.getDepartements()
  }

  getDepartements() {
    this.DepartService
      .get('getDepartements')
      .subscribe((departements) => (this.departements = departements));
  }



  deleteDepartement(elementId: number) {
    this.DepartService
      .delete('deleteDepart', elementId)
      .subscribe(() => {})
      location.reload()
      ;
  }

  openAddDepartementDialog() {
    this.dialog.open(AddDepartementComponent, { width: '40%' });
  }

  openEditDepartementDialog(departement: Object) {
    this.dialog.open(EditDepartementComponent, {
      width: '40%',
      data: { departement },
    });
  }

  openListEtudiantDialog(departement:Object) {
    this.dialog.open(ShowListEtudiantsComponent, { width: '60%', data: { departement}, })
  }

  exportPDF() {
    this.DepartService
      .exportPDF('exportPDF/')
      .subscribe(x =>{
          const blob = new Blob([x], {type: 'application/pdf'});
          const data = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = data;
          link.download = 'departements.pdf';
          link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

          setTimeout(function() {
            window.URL.revokeObjectURL(data);
            link.remove();
          }, 100 );
      })
  }


  // searchDepartement(){
  //   if(this.nomDepartement==""){
  //     this.ngOnInit();
  //   }else{
  //     this.departements=this.departements.filter(
  //       res => {
  //         return res.nomDepartement.toLocaleLowerCase().match(this.nomDepartement.toLocaleLowerCase());
  //       }
  //     )
  //   }
  // }


  // key: String = ''
  // reverse: boolean = false;
  // sortByNomDepart(key){
  //   this.key= key
  //   this.reverse = !this.reverse

  // }

}
