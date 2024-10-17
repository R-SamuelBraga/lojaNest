import { IsNotEmpty } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  descricao: string;
  @IsNotEmpty()
  produto: ProdutoEntity;
}
