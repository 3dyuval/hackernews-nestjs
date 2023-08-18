import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { LinkEntity } from '../link/link.entity';
@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 500 })
  @Field()
  body: string;

  @OneToOne(() => LinkEntity)
  @JoinColumn()
  @Field(() => Int)
  link: number;

  @Column()
  @Field()
  parentId: string;
}
