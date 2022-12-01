import { Option } from './Option';

export interface Etudiant {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  option: Option;
}
