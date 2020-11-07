import {Required,Default,Format} from "@tsed/common";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Sweet {
  @ObjectID("id")
  _id: string;

  @Required()
  name: string;

  @Format("date-time")
  @Default(Date.now)
  createdAt: Date = new Date();
}
