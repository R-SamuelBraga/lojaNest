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
import { ProdutoEntity } from './produto.entity';
import { v4 as uuid } from 'uuid';

@Controller('/produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}
  @Post()
  async criaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.valor = dadosProduto.valor;
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.quantidade = dadosProduto.quantidade;
    produtoEntity.caracteristicas = dadosProduto.caracteristicas;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.imagens = dadosProduto.imagens;
    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.id = uuid();

    this.produtoService.salvarProduto(produtoEntity);

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
