import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { AddEquipeComponent } from '../../equipe/add-equipe/add-equipe.component';

@Component({
  selector: 'app-add-equipes',
  templateUrl: './add-equipes.component.html',
  styleUrls: ['./add-equipes.component.css']
})
export class AddEquipesComponent implements OnInit {

  equipeForm!: FormGroup;

  submitted= false;
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddEquipeComponent>,
    private fb:FormBuilder,

  ) {
  
  }

  ngOnInit(): void {
    this.equipeForm =this.fb.group({
    
      niveau:['', Validators.required] , 
      nomEquipe:['', Validators.required],
    })
  }

  get f(){return this.equipeForm.controls}


  onSubmit() {
    this.submitted = true;
    if(this.equipeForm.invalid){
      return;
    }else{
      console.log(this.equipeForm.value)
      this.apiService.add('saveEquipe', this.equipeForm.value).subscribe((equipe) => null);
      location.reload()}
    
  }
 
  

  resetControls() {
    this.submitted = false;
    this.equipeForm.reset();
  }

  closeDialog() {
    this.submitted = false;
    this.dialogRef.close();
  }
}
