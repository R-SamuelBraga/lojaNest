import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDTO } from './UsuarioDTO/criaUsuarioDTO';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senhas = dadosUsuario.senha;
    usuarioEntity.id = uuid();
    this.usuarioService.salvarUsuario(usuarioEntity);
    return {
      id: usuarioEntity.id,
      nome: usuarioEntity.nome,
      email: usuarioEntity.email,
      status: 'usuário criado',
    };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioService.listarUsuarios();
  }
}
