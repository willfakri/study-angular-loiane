import { Component } from '@angular/core';
import { DetalhesService } from './detalhes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  produto: any;

  constructor(private detalhesService: DetalhesService) {
    this.produto = this.detalhesService.getProduct();
  }

  showAlert() {
    alert(this.produto.nome_produto);
  }
}
