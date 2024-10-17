import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  descricao: string;

  produto: ProdutoEntity;
}

export class ImagemProdutoDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  descricao: string;

  produto: ProdutoEntity;
}

export class CriaProdutoDTO {
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
