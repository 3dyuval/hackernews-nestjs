import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql'
import { Comment } from '../comment/entities/comment.entity'
@Entity('links')
@ObjectType()
export class Link {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field((type) => Int)
  id: number

  @Column({ type: 'varchar', length: 200 })
  @Field()
  url: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  description: string

  @Column({ type: 'timestamp without time zone', default: () => 'now()' })
  @Field((type) => GraphQLISODateTime)
  createdAt: string

  @Column({ type: 'uuid' })
  @Field()
  userId: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  topic: string

  @OneToMany((type) => Comment, (comment) => comment.link)
  @Field((type) => [Comment], {  defaultValue: []})
  comments: Comment[]
}
