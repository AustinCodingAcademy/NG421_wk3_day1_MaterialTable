import { Injectable } from '@angular/core';
import { ICharacters } from '../models/icharacters';
import { ACTIVE_CHARACTER } from '../data/character-data';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  members: ICharacters[] = [];
  constructor() { 
    this.members = ACTIVE_CHARACTER;
  }

  getMembers(): ICharacters[]{
    return this.members;
  }
}
