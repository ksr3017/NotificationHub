import { ArgsType, Field } from "@nestjs/graphql";
import { NotificationTopicConfigurationCreateInput } from "./NotificationTopicConfigurationCreateInput";

@ArgsType()
class CreateNotificationTopicConfigurationArgs {
  @Field(() => NotificationTopicConfigurationCreateInput, { nullable: false })
  data!: NotificationTopicConfigurationCreateInput;
}

export { CreateNotificationTopicConfigurationArgs };
