import { ArgsType, Field } from "@nestjs/graphql";
import { NotificationTopicConfigurationWhereUniqueInput } from "./NotificationTopicConfigurationWhereUniqueInput";

@ArgsType()
class DeleteNotificationTopicConfigurationArgs {
  @Field(() => NotificationTopicConfigurationWhereUniqueInput, {
    nullable: false,
  })
  where!: NotificationTopicConfigurationWhereUniqueInput;
}

export { DeleteNotificationTopicConfigurationArgs };
