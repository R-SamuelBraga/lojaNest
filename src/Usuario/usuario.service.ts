import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
import { ListaUsuarioDTO } from './UsuarioDTO/listaUsuarioDTO';
import { CriaUsuarioDTO } from './UsuarioDTO/criaUsuarioDTO';
import { v4 as uuid } from 'uuid';
@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}
  private lista = this.usuarioRepository.usuarios;

  async salvarUsuario(dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.id = uuid();

    this.lista.push(usuarioEntity);
  }

  async listarUsuarios() {
    const usuariosSalvos = (lista) =>
      lista.map((usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome));
    return usuariosSalvos(this.lista);
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.lista.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario === undefined;
  }

  async atualiza(id: string, dadosdeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.lista.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (possivelUsuario) {
      possivelUsuario.email = dadosdeAtualizacao.email;
      possivelUsuario.nome = dadosdeAtualizacao.nome;
      possivelUsuario.senha = dadosdeAtualizacao.senha;
    }
  }

  async remover(id: string) {
    const usuarioRemover = this.lista.find((usuario) => usuario.id === id);
    this.lista = this.lista.filter((usuario) => usuario.id !== id);

    return usuarioRemover;
  }
}
