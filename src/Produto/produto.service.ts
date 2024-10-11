import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';

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
  async salvarProduto(produto: ProdutoEntity) {
    this.listaProdutos.push(produto);
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
