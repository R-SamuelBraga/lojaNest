import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  public usuarios: any[];

  constructor() {
    this.usuarios = [];
  }
}
