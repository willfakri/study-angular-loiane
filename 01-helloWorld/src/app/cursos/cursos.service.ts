import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Abap', 'Java', 'Go Lang', 'Cursos Service'];
  }
}
