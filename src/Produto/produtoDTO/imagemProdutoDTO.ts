import { IsNotEmpty } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class ImagemProdutoDTO {
  @IsNotEmpty()
  url: string;
  @IsNotEmpty()
  descricao: string;
  @IsNotEmpty()
  produto: ProdutoEntity;
}
