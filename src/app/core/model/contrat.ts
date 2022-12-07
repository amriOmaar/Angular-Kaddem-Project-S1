import { CardEtudiantComponent } from "src/app/pages/admin/departement/card-etudiant/card-etudiant.component";
import { Etudiant } from "./etudiant";
import { Specialite } from "./specialite";

export class Contrat {
    idContrat : number;
    dateDebutContrat : Date;
    dateFinContrat : Date;
    Specialite : Specialite;
    etudiant : Etudiant;
    archive :Boolean;
}
