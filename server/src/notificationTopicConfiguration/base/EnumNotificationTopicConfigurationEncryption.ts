import { registerEnumType } from "@nestjs/graphql";

export enum EnumNotificationTopicConfigurationEncryption {
  EnableEncryption = "EnableEncryption",
  DisableEncryption = "DisableEncryption",
}

registerEnumType(EnumNotificationTopicConfigurationEncryption, {
  name: "EnumNotificationTopicConfigurationEncryption",
});
