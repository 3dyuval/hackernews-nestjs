import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm'
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql'
import { Comment } from '../comment/entities/comment.entity'
@Entity('links')
@ObjectType()
export class Link {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column('varchar', { length: 200 })
  @Field()
  url: string

  @Column('varchar', { length: 255, nullable: true })
  @Field({ nullable: true })
  description: string

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: string

  @Column('uuid')
  @Field()
  userId: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  topic: string

  @OneToMany(() => Comment, (comment) => comment.link, {
    cascade: ['insert'],
  })
  @Field(() => [Comment], { defaultValue: [] })
  comments: Comment[]
}
