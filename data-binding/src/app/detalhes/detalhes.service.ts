import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  constructor() { }

  getProduct() {
    return {
      "nome_produto": "Produto XPTO",
      "valor_produto": 12.00,
      "data_vencimento": "30/03/2023",
      "categoria_produto": "Renda Fixa"
    };
  }
}
