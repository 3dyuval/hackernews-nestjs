import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
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
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column('varchar', { length: 500 })
  @Field()
  body: string

  @ManyToOne(() => Link, (link) => link.comments)
  link: Link

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: string

  @Column('int')
  linkId: number

  @Column('int', { nullable: true })
  parentId?: number

  @ManyToOne(() => Comment, (comment) => comment.children)
  @JoinColumn({ name: 'parentId' })
  commentParent: Comment

  @OneToMany(() => Comment, (comment) => comment.parent)
  children: Comment[]

  @Field(() => CommentParent)
  parent: typeof CommentParent
}

export const CommentParent = createUnionType({
  name: 'CommentParent',
  types: () => [Link, Comment] as const,
})
