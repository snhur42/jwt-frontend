import {AbstractEntity} from "./abstract-entity";
import {Role} from "./role";

export interface User extends AbstractEntity{
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: Role
}
