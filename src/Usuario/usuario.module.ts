import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioService } from './usuario.service';
import { EmailEhUnicoValidator } from './validators/email-eh-unico';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, UsuarioService, EmailEhUnicoValidator],
})
export class UsuarioModule {}
