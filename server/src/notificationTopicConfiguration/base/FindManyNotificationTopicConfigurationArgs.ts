import { ArgsType, Field } from "@nestjs/graphql";
import { NotificationTopicConfigurationWhereInput } from "./NotificationTopicConfigurationWhereInput";

@ArgsType()
class FindManyNotificationTopicConfigurationArgs {
  @Field(() => NotificationTopicConfigurationWhereInput, { nullable: true })
  where?: NotificationTopicConfigurationWhereInput;
}

export { FindManyNotificationTopicConfigurationArgs };
