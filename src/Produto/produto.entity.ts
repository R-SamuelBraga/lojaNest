import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CaracteristicaProduto } from './caracteristicaProduto.entity';
import { ImagemProduto } from './imagemProduto.entity';

@Entity({ name: 'produto' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'usuario_id' })
  usuarioId: string;
  @Column({ name: 'nome', length: '32', nullable: false })
  nome: string;
  @Column({ name: 'valor', nullable: false })
  valor: number;
  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;
  @Column({ name: 'descricao', length: '100', nullable: false })
  descricao: string;
  @Column({ name: 'categoria', length: '255', nullable: false })
  categoria: string;
  @OneToMany(
    () => CaracteristicaProduto,
    (caracteristicaProduto) => caracteristicaProduto.produto,
  )
  caracteristicas: CaracteristicaProduto[];
  @OneToMany(() => ImagemProduto, (imagemProduto) => imagemProduto.produto)
  imagens: ImagemProduto[];
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
