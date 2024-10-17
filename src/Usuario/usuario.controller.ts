import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDTO } from './UsuarioDTO/criaUsuarioDTO';
import { AtualizaUsuarioDTO } from './UsuarioDTO/atualizaUsuarioDTO';
@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    this.usuarioService.salvarUsuario(dadosUsuario);
    return {
      nome: dadosUsuario.nome,
      email: dadosUsuario.email,
      status: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioService.listarUsuarios();
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioService.atualiza(
      id,
      novosDados,
    );
    return {
      usuario: usuarioAtualizado,
      message: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.remover(id);

    return {
      usuario: usuarioRemovido,
      message: 'usuario removido com sucesso',
    };
  }
}
