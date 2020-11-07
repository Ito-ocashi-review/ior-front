import {Inject, Service} from "@tsed/common";
import {$log} from "@tsed/logger";
import {MongooseModel} from "@tsed/mongoose";
import {User} from "../models/User";

@Service()
export class UsersService {
    @Inject(User)
    private User: MongooseModel<User>;

    $onInit() {
        this.reload();
    }

    async reload() {
        const users = await this.User.find({});

        if (users.length === 0) {
        const promises = require("../../resources/user.json").map((user: any) => this.save(user));
        await Promise.all(promises);
        }
    }

  /**
   * Find a user by his ID.
   * @param id
   * @returns {undefined|User}
   */
  async find(id: string): Promise<User | null> {
    $log.debug("Search a calendar from ID", id);
    const user = await this.User.findById(id).exec();

    $log.debug("Found", user);

    return user;
  }

  /**
   *
   * @param user
   * @returns {Promise<TResult|TResult2|User>}
   */
  async save(user: User): Promise<User> {
    $log.debug({message: "Validate user", user});

    const model = new this.User(user);
    $log.debug({message: "Save user", user});
    await model.updateOne(user, {upsert: true});

    $log.debug({message: "User saved", model});

    return model;
  }

}