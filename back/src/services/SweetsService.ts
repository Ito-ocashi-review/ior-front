import {Inject, Service} from "@tsed/common";
import {$log} from "@tsed/logger";
import {MongooseModel} from "@tsed/mongoose";
import {Sweet} from "../models/Sweet";

@Service()
export class SweetsService {
  @Inject(Sweet)
  private Sweet: MongooseModel<Sweet>;

  $onInit() {
    this.reload();
  }

  async reload() {
    const sweets = await this.Sweet.find({});

    if (sweets.length === 0) {
      const promises = require("../../resources/sweets.json").map((sweet: any) => this.save(sweet));
      await Promise.all(promises);
    }
  }

  /**
   * Find a sweet by his ID.
   * @param id
   * @returns {undefined|Sweet}
   */
  async find(id: string): Promise<Sweet | null> {
    $log.debug("Search a calendar from ID", id);
    const sweet = await this.Sweet.findById(id).exec();

    $log.debug("Found", sweet);

    return sweet;
  }

  /**
   *
   * @param sweet
   * @returns {Promise<TResult|TResult2|Sweet>}
   */
  async save(sweet: Sweet): Promise<Sweet> {
    $log.debug({message: "Validate sweet", sweet});

    const model = new this.Sweet(sweet);
    $log.debug({message: "Save sweet", sweet});
    await model.updateOne(sweet, {upsert: true});

    $log.debug({message: "Sweet saved", model});

    return model;
  }

}
