import {useDecorators} from "@tsed/core";
import {ObjectID} from "@tsed/mongoose";
import {Description} from "@tsed/schema";

export function SweetId() {
  return useDecorators(ObjectID(), Description("The sweet id"));
}
