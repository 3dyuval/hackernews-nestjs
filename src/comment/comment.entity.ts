import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 500 })
  @Field()
  body: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  linkId: number;

  @Column()
  @Field()
  parentId: string;
}
