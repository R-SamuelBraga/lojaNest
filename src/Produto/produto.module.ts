import { Module } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ProdutoService],
})
export class ProdutoModule {}
