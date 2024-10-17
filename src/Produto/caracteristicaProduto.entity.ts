import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'caracteristica_produto' })
export class CaracteristicaProduto {
  @PrimaryColumn({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
  @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  produto: ProdutoEntity;
}
