import { Module } from "@nestjs/common";
import { NotificationTopicConfigurationModuleBase } from "./base/notificationTopicConfiguration.module.base";
import { NotificationTopicConfigurationService } from "./notificationTopicConfiguration.service";
import { NotificationTopicConfigurationController } from "./notificationTopicConfiguration.controller";
import { NotificationTopicConfigurationResolver } from "./notificationTopicConfiguration.resolver";

@Module({
  imports: [NotificationTopicConfigurationModuleBase],
  controllers: [NotificationTopicConfigurationController],
  providers: [
    NotificationTopicConfigurationService,
    NotificationTopicConfigurationResolver,
  ],
  exports: [NotificationTopicConfigurationService],
})
export class NotificationTopicConfigurationModule {}
