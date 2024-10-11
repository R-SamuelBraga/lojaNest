import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './caracteristicaProdutoDTO';
import { ImagemProdutoDTO } from './imagemProdutoDTO';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'id de produto invalido' })
  produtoId: string;
  @IsUUID(undefined, { message: 'Id de usuario invalido' })
  usuarioId: string;
  @IsNotEmpty()
  nome: string;
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor necessita ser maior que zero' })
  valor: number;
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  quantidade: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  @IsNotEmpty()
  caracteristicas: CaracteristicaProdutoDTO[];
  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  @IsNotEmpty()
  imagens: ImagemProdutoDTO[];
  @IsNotEmpty()
  categoria: string;
}
