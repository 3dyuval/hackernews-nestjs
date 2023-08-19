import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { OidcStrategy, buildOpenIdClient } from './oidc.strategy';
import { SessionSerializer } from './session.serializer';


const OidcStrategyFactory = {
    provide: 'OidcStrategy',
    useFactory: async () => {
      const client = await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
      const strategy = new OidcStrategy(client);
      return strategy;
    },
  };
@Module({
    imports: [PassportModule.register({ session: true, defaultStrategy: 'oidc' })],
    providers: [OidcStrategyFactory, SessionSerializer],
    controllers: [AuthController]
})
export class AuthModule {}
