import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../model/User';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: Etudiant[];
  public isLoading: boolean = false;
  public user: Etudiant;

  constructor(private http: HttpClient) {}

  createEtudiant(user: Etudiant) {
    this.isLoading = true;
    this.http.post<Etudiant>(`${environment.apiRoot}/etudiant`, user).subscribe(
      (user: Etudiant) => {
        this.isLoading = false;
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  getEtudiant(id: number) {
    this.isLoading = true;
    this.http.get<Etudiant>(`${environment.apiRoot}/student/${id}`).subscribe(
      (user: Etudiant) => {
        this.isLoading = false;
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  getEtudiants() {
    this.isLoading = true;
    this.http.get<Etudiant[]>(`${environment.apiRoot}/student`).subscribe(
      (users: Etudiant[]) => {
        this.isLoading = false;
        this.users = users;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  updateEtudiant(id: number, user: Etudiant) {
    this.isLoading = true;
    this.http.get<Etudiant>(`${environment.apiRoot}/etudiant/${id}`).subscribe(
      (user: Etudiant) => {
        this.isLoading = false;
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  deleteEtudiant(id: number) {
    this.isLoading = true;
    this.http.delete(`${environment.apiRoot}/etudiant/${id}`).subscribe(
      (res) => {
        this.isLoading = false;
        console.log(`deleted etudiant ${id}`);
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        console.log(`error deleting etudiant ${id}`);
      }
    );
  }
}
