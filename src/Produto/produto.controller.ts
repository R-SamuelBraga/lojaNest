import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put('/:id')
  async atualizaProuduto(
    @Param('id') id: string,
    @Body() dadosdeAtualizacao: Partial<CriaProdutoDTO>,
  ) {
    return this.produtoService.atualizarProduto(id, dadosdeAtualizacao);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.produtoService.deletarProduto(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
