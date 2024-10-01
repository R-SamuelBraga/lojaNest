import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}
  private lista = this.usuarioRepository.usuarios;

  public salvarUsuario(usuario) {
    this.lista.push(usuario);
  }

  public listarUsuarios() {
    return this.lista;
  }
}
