import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuario/usuario.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './Produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
