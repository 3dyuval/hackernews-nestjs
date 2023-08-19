import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { Link } from '../link/link.entity';

@Entity('comments')
@ObjectType('Comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 500 })
  @Field()
  body: string;

  @ManyToOne(type => Link, (link) => link.comments)
  @Field(type => Link)
  link: Link;

  @Column({nullable: true})
  @Field({nullable: true})
  parentId: string;
}
