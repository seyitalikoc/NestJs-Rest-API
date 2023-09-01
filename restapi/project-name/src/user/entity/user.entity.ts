import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @Column({ type: 'varchar', length: 55 })
  name: string;

  @Column({ type: 'varchar', length: 55})
  username: string;

  @Column({ type: 'varchar', length: 55 })
  password: string;

  @PrimaryColumn({ type: 'varchar', length: 55 })
  profession: string;

  @PrimaryGeneratedColumn()
  id: number;
}