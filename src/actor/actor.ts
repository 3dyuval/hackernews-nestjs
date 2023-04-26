import { InterfaceType, Field, ID } from "@nestjs/graphql";

@InterfaceType()
export abstract class Actor {

    @Field(type => ID)
    id: string

    @Field()
    name: string

    @Field()
    location: string

    @Field()
    image: string
}
