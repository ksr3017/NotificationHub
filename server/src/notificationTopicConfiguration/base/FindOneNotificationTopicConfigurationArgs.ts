import { ArgsType, Field } from "@nestjs/graphql";
import { NotificationTopicConfigurationWhereUniqueInput } from "./NotificationTopicConfigurationWhereUniqueInput";

@ArgsType()
class FindOneNotificationTopicConfigurationArgs {
  @Field(() => NotificationTopicConfigurationWhereUniqueInput, {
    nullable: false,
  })
  where!: NotificationTopicConfigurationWhereUniqueInput;
}

export { FindOneNotificationTopicConfigurationArgs };
