import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { Link } from '../link/link.entity';
@Entity('Comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 500 })
  @Field()
  body: string;

  @OneToOne(() => Link)
  @JoinColumn()
  @Field(() => Int)
  link: number;

  @Column({nullable: true})
  @Field({nullable: true})
  parentId: string;
}
