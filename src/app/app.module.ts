import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ContratComponent } from './pages/admin/contrat/contrat.component';
import { AdminComponentsModule } from './components/admin-components/admin-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddContratComponent } from './pages/admin/contrat/add-contrat/add-contrat.component';
import { EquipeComponent } from './pages/admin/equipe/equipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContratComponent } from './pages/admin/contrat/edit-contrat/edit-contrat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';



import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { AddEquipeComponent } from './pages/admin/equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './pages/admin/equipe/update-equipe/update-equipe.component';
import { DepartementComponent } from './pages/admin/departement/departement.component';
import { AddDepartementComponent } from './pages/admin/departement/add-departement/add-departement.component';
import { EditDepartementComponent } from './pages/admin/departement/edit-departement/edit-departement.component';
import { UniversiteComponent } from './pages/admin/universite/universite.component';
import { AddUniversiteComponent } from './pages/admin/universite/add-universite/add-universite.component';
import { EditUniversiteComponent } from './pages/admin/universite/edit-universite/edit-universite.component';
import { ShowListEtudiantsComponent } from './pages/admin/departement/show-list-etudiants/show-list-etudiants.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardEtudiantComponent } from './pages/admin/departement/card-etudiant/card-etudiant.component';
import { SearchPipe } from './search.pipe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AdddetailequipeComponent } from './pages/admin/detailequipe/adddetailequipe/adddetailequipe.component';
import { DetailequipeComponent } from './pages/admin/detailequipe/detailequipe.component';
import { UpdateetailequipeComponent } from './pages/admin/detailequipe/updateetailequipe/updateetailequipe.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    ContratComponent,
    AddContratComponent,
    EquipeComponent,
    EditContratComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    DepartementComponent,
    AddDepartementComponent,
    EditDepartementComponent,
    UniversiteComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    ShowListEtudiantsComponent,
    CardEtudiantComponent,
    SearchPipe,
    DetailequipeComponent,
    AdddetailequipeComponent,
    UpdateetailequipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminComponentsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgApexchartsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
