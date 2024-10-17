import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { CriaProdutoDTO } from './produtoDTO/criaProdutoDTO';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ProdutoService {
  constructor(private produtorRepository: ProdutoRepository) {}
  private listaProdutos = this.produtorRepository.produtos;

  private buscaPorId(id: string) {
    const possivelProduto = this.listaProdutos.find(
      (produto) => produto.id === id,
    );

    if (!possivelProduto) {
      throw new Error('Produto não existente');
    }
    return possivelProduto;
  }
  async salvarProduto(dadosProduto: CriaProdutoDTO) {
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

    this.listaProdutos.push(produtoEntity);
  }
  async listarProdutos() {
    return this.listaProdutos;
  }
  async atualizarProduto(
    id: string,
    dadosdeAtualizacao: Partial<ProdutoEntity>,
  ) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.buscaPorId(id);

    Object.entries(dadosdeAtualizacao).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }
  async deletarProduto(id: string) {
    const produtoRemover = this.buscaPorId(id);

    this.listaProdutos = this.listaProdutos.filter(
      (produto) => produto.id !== produtoRemover.id,
    );

    return produtoRemover;
  }
}
