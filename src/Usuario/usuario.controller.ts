import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDTO } from './UsuarioDTO/criaUsuarioDTO';

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    this.usuarioService.salvarUsuario(dadosUsuario);
    return { dadosUsuario, status: 'usuário criado' };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioService.listarUsuarios();
  }
}
