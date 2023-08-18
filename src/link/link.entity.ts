import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@Entity('link')
@ObjectType()
export class LinkEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 200 })
  @Field()
  url: string;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  description: string;

  @Column({ type: 'timestamp without time zone', default: () => 'now()' })
  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @Column({ type: 'uuid' })
  @Field()
  userId: string;

  @Column()
  @Field()
  topic: string;
}
