import { ObjectType } from "@nestjs/graphql";
import { Actor } from "src/actor/actor";


@ObjectType({
    implements: () => Actor
})
export class Shopper {}
