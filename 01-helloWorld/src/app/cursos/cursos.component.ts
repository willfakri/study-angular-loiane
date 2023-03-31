import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomeCurso: string;
  cursos: string[]; 

  //Exemplo de injeção de dependência
  constructor(private cursosService: CursosService){
    this.nomeCurso = 'Curso da marotagem e da malandragem do Angular 2.x+';
    this.cursos = cursosService.getCursos();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
