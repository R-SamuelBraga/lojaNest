import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CriaProdutoDTO } from './produtoDTO/criaProdutoDTO';

@Controller('/produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}
  @Post()
  async criaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoService.salvarProduto(dadosProduto);
    return { dadosProduto, status: 'Produto Criado' };
  }
  @Get()
  async listaProdutos() {
    return this.produtoService.listarProdutos();
  }
}
