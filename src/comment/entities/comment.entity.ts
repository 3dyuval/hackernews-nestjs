import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import {
  Field,
  Int,
  ObjectType,
  GraphQLISODateTime,
  createUnionType,
} from '@nestjs/graphql'
import { Link } from '@/link/link.entity'

@Entity('comments')
@ObjectType('Comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int' })
  @Field(() => Int)
  id: number

  @Column({ type: 'varchar', length: 500 })
  @Field()
  body: string

  @ManyToOne((type) => Link, (link) => link.comments)
  link: Link

  @Column({ type: 'timestamp without time zone', default: () => 'now()' })
  @Field((type) => GraphQLISODateTime)
  createdAt: string

  @Column({ type: 'int'})
  linkId: number;

  @Column({ nullable: true })
  parentId?: number

  @ManyToOne((type) => Comment, (comment) => comment.children)
  @JoinColumn({ name: 'parentId' })
  commentParent: Comment

  @OneToMany((type) => Comment, (comment) => comment.parent)
  children: Comment[]

  @Field(() => CommentParent)
  parent: typeof CommentParent
}

export const CommentParent = createUnionType({
  name: 'CommentParent',
  types: () => [Link, Comment] as const,
})
