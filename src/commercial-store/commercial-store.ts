import { ObjectType, Field } from "@nestjs/graphql";
import { Actor } from "src/actor/actor";

@ObjectType({
    implements: () => Actor 
})
export class CommercialStore {
    id: string
    name: string
    location: string
    image: string

    @Field()
    address: string
    tier: string
}
