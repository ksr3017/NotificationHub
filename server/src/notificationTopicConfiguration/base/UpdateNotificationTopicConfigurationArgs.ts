import { ArgsType, Field } from "@nestjs/graphql";
import { NotificationTopicConfigurationWhereUniqueInput } from "./NotificationTopicConfigurationWhereUniqueInput";
import { NotificationTopicConfigurationUpdateInput } from "./NotificationTopicConfigurationUpdateInput";

@ArgsType()
class UpdateNotificationTopicConfigurationArgs {
  @Field(() => NotificationTopicConfigurationWhereUniqueInput, {
    nullable: false,
  })
  where!: NotificationTopicConfigurationWhereUniqueInput;
  @Field(() => NotificationTopicConfigurationUpdateInput, { nullable: false })
  data!: NotificationTopicConfigurationUpdateInput;
}

export { UpdateNotificationTopicConfigurationArgs };
