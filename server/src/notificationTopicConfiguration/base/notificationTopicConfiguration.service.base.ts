import { PrismaService } from "nestjs-prisma";
import {
  FindOneNotificationTopicConfigurationArgs,
  FindManyNotificationTopicConfigurationArgs,
  NotificationTopicConfigurationCreateArgs,
  NotificationTopicConfigurationUpdateArgs,
  NotificationTopicConfigurationDeleteArgs,
  Subset,
} from "@prisma/client";

export class NotificationTopicConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}
  findMany<T extends FindManyNotificationTopicConfigurationArgs>(
    args: Subset<T, FindManyNotificationTopicConfigurationArgs>
  ) {
    return this.prisma.notificationTopicConfiguration.findMany(args);
  }
  findOne<T extends FindOneNotificationTopicConfigurationArgs>(
    args: Subset<T, FindOneNotificationTopicConfigurationArgs>
  ) {
    return this.prisma.notificationTopicConfiguration.findOne(args);
  }
  create<T extends NotificationTopicConfigurationCreateArgs>(
    args: Subset<T, NotificationTopicConfigurationCreateArgs>
  ) {
    return this.prisma.notificationTopicConfiguration.create<T>(args);
  }
  update<T extends NotificationTopicConfigurationUpdateArgs>(
    args: Subset<T, NotificationTopicConfigurationUpdateArgs>
  ) {
    return this.prisma.notificationTopicConfiguration.update<T>(args);
  }
  delete<T extends NotificationTopicConfigurationDeleteArgs>(
    args: Subset<T, NotificationTopicConfigurationDeleteArgs>
  ) {
    return this.prisma.notificationTopicConfiguration.delete(args);
  }
}
