import { Field, ObjectType } from "@nestjs/graphql";
import { Actor } from "src/actor/actor";


@ObjectType({
    implements: () => Actor 
})
export class FreeStore {
    id: string
    name: string
    location: string
    image: string

    @Field()
    address: string

}
