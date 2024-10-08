import { CaracteristicaProdutoDTO } from './produtoDTO/caracteristicaProdutoDTO';
import { ImagemProdutoDTO } from './produtoDTO/imagemProdutoDTO';

export class ProdutoEntity {
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  caracteristicas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDTO[];
  categoria: string;
}
