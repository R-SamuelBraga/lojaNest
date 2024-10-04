import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  public usuarios: UsuarioEntity[];

  constructor() {
    this.usuarios = [];
  }
}
