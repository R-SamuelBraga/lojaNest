import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validators/email-eh-unico';

export class AtualizaUsuarioDTO {
  @IsNotEmpty()
  @IsOptional()
  nome: string;
  @IsEmail()
  @EmailEhUnico({ message: 'Já existe um usuario com este email' })
  @IsOptional()
  email: string;
  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres' })
  senha: string;
}
