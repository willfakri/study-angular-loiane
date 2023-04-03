import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
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
