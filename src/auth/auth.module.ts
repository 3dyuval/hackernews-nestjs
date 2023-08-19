import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GQLAuthGuard } from './gql-auth.gurad';

@Module({
    imports: [ConfigModule.forRoot({isGlobal: true})],
    providers: [GQLAuthGuard]
})
export class AuthModule {}
