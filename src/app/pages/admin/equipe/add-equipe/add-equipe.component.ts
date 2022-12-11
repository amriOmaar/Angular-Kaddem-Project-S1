import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../core/services/admin/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipeForm!: FormGroup;

  submitted= false;
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddEquipeComponent>,
    private fb:FormBuilder,
    private  service: NotificationsService 
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
      this.onSuccess;
      location.reload()}
    
  }
  onSuccess(message){
    this.service.success('addedd succefully', message, {
      position:['bottom', 'right'],
      timeOut:2000,
      animate:'fade',
      showProgressBar:true
    })
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
