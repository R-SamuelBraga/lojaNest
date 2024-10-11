import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  public produtos: ProdutoEntity[];

  constructor() {
    this.produtos = [];
  }
}
