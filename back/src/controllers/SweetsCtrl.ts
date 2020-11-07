import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {NotFound} from "@tsed/exceptions";
import {Description, Required, Returns, Status, Summary} from "@tsed/schema";
import {SweetId} from "../decorators/SweetId";
import {Sweet} from "../models/Sweet";
import {SweetsService} from "../services/SweetsService";

@Controller({
  path: "/sweets",
})
export class SweetsCtrl {
  constructor(private sweetsService: SweetsService) {}

  @Get("/:id")
  @Summary("Return a sweet by ID")
  @(Status(200, Sweet).Description("Success"))
  async get(@PathParams("id") @SweetId() id: string): Promise<Sweet> {
    const sweet = await this.sweetsService.find(id);

    if (sweet) {
      return sweet;
    }

    throw new NotFound("Sweet not found");
  }

  @Post("/")
  @Summary("Create a new Sweet")
  @(Returns(201, Sweet).Description("Created"))
  save(
    @Description("Sweet model")
    @BodyParams()
    @Required()
    sweet: Sweet
  ) {
    return this.sweetsService.save(sweet);
  }

}
