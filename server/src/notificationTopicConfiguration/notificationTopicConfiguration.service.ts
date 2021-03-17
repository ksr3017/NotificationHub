import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NotificationTopicConfigurationServiceBase } from "./base/notificationTopicConfiguration.service.base";

@Injectable()
export class NotificationTopicConfigurationService extends NotificationTopicConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
