import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import  * as Auth0Strategy  from 'passport-auth0'

const strategy = new Auth0Strategy({
  domain: process.env['AUTH0_DOMAIN'],
  clientID: process.env['AUTH0_CLIENT_ID'],
  clientSecret: process.env['AUTH0_CLIENT_SECRET'],
  callbackURL: process.env['AUTH0_CALLBACK_URL'],
},
function(accessToken, refreshToken, extraParams, profile, done) {
  /**
   * Access tokens are used to authorize users to an API
   * (resource server)
   * accessToken is the token to call the Auth0 API
   * or a secured third-party API
   * extraParams.id_token has the JSON Web Token
   * profile has all the information from the user
   */
  return done(null, profile);
})

@Injectable()
export class GQLAuthGuard extends AuthGuard(strategy) {
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext()
    request.body = ctx.getArgs().loginUserInput

    return request
  }
}
