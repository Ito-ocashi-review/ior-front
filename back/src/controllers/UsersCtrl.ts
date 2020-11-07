import {BodyParams, Controller, Get} from "@tsed/common";
import {NotFound} from "@tsed/exceptions";
import {Status, Summary} from "@tsed/schema";
import {User} from "../models/User";
import {UsersService} from "../services/UsersService";

@Controller({
  path: "/users",
})
export class UsersCtrl {
  constructor(private usersService: UsersService) {}

  @Get("/search")
  @Summary("Return a user by email")
  @(Status(200, User).Description("Success"))
  async get(@BodyParams("email") email: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      return user;
    }

    throw new NotFound("User not found");
  }

}
