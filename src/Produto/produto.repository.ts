import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  public produtos: any[];

  constructor() {
    this.produtos = [];
  }
}
