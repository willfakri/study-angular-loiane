import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

valor1: number = 2;
valor2: number = 50;
featureToggle: boolean = false;
urlImagem = 'http://lorempixel.com.br/300/150/?1';

getMaiorQue10() {
  return (this.valor1 + this.valor2) > 10;
  }

}
