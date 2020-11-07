import {BodyParams, Controller, Post, ProviderScope, Req, Scope} from "@tsed/common";
import {Authenticate} from "@tsed/passport";
import {Returns} from "@tsed/schema";

import {User} from "../models/User";
import {UserCreation} from "../models/UserCreation";

@Controller("/auth")
@Scope(ProviderScope.SINGLETON)
export class AuthCtrl {
  @Post("/login")
  @Authenticate("login")
  login(@Req() req: Req, @BodyParams("email") email: string, @BodyParams("password") password: string) {
    // FACADE
    return req.user;
  }

  @Post("/signup")
  @Returns(201, User)
  @Authenticate("signup")
  signup(@Req() req: Req, @BodyParams() user: UserCreation) {
    // FACADE
    return req.user;
  }

}