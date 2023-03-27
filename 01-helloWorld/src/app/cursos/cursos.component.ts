import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomeCurso: string;
  cursos: string[] = ['Abap', 'Java', 'Go Lang']

  constructor(){
    this.nomeCurso = 'Curso da marotagem e da malandragem do Angular 2.x+'
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
