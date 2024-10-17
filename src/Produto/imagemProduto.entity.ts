import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'imagem_Produto' })
export class ImagemProduto {
  @PrimaryColumn({ name: 'url', length: 255, nullable: false })
  url: string;
  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
  @ManyToOne(() => ProdutoEntity, (produto) => produto.imagens, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  produto: ProdutoEntity;
}
