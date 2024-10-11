import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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
  @IsNotEmpty({ message: 'O id do produto não pode ser vazio' })
  @IsUUID(undefined, { message: 'Id de produto invalido' })
  produtoID: string;
  @IsNotEmpty({ message: 'O id do usuario não pode ser vazio' })
  @IsUUID(undefined, { message: 'Id de usuario invalido' })
  usuarioId: string;
  @IsOptional()
  nome: string;
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor necessita ser maior que zero' })
  valor: number;
  @IsInt()
  @Min(0)
  @IsOptional()
  quantidade: number;
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  descricao: string;
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  @IsOptional()
  caracteristicas: CaracteristicaProdutoDTO[];
  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  @IsOptional()
  imagens: ImagemProdutoDTO[];
  @IsOptional()
  categoria: string;
}
