import { Field, InputType, Int } from '@nestjs/graphql';


@InputType()
export class CommentInput {
  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field(() => Int)
  linkId: number;

  @Field(() => String)
  body: string;
}