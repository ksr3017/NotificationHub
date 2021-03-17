import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationTopicConfigurationService } from "./notificationTopicConfiguration.service";
import { NotificationTopicConfigurationControllerBase } from "./base/notificationTopicConfiguration.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("notification-topic-configurations")
@common.Controller("notification-topic-configurations")
export class NotificationTopicConfigurationController extends NotificationTopicConfigurationControllerBase {
  constructor(
    protected readonly service: NotificationTopicConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
