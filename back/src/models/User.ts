import {Description, Ignore, Required,Example,Format} from "@tsed/schema";
import {Model} from "@tsed/mongoose";

@Model()
export class User {
  @Description("Database assigned id")
  _id: string;

  @Ignore()
  password: string;

  @Description("User email")
  @Example("user@domain.com")
  @Format("email")
  @Required()
  email: string;

  @Description("User name")
  @Required()
  name: string;

  verifyPassword(password: string) {
    return this.password === password;
  }
}
