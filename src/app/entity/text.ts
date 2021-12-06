import {AbstractEntity} from "./abstract-entity";

export interface Text extends AbstractEntity{
  text: string;
  isChosen: boolean;
}
