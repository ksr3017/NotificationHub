import { registerEnumType } from "@nestjs/graphql";

export enum EnumNotificationTopicConfigurationTopicType {
  Fifo = "Fifo",
  Standard = "Standard",
}

registerEnumType(EnumNotificationTopicConfigurationTopicType, {
  name: "EnumNotificationTopicConfigurationTopicType",
});
