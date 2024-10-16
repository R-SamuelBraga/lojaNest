import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

class CaracteristicaProduto {
  nome: string;
  descricao: string;
}

class ImagemProduto {
  url: string;
  descricao: string;
}

export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'usuario_id' })
  usuarioId: string;
  @Column()
  nome: string;
  @Column()
  valor: number;
  @Column()
  quantidade: number;
  @Column()
  descricao: string;
  @Column()
  categoria: string;
  @Column()
  caracteristicas: CaracteristicaProduto[];
  @Column()
  imagens: ImagemProduto[];
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
