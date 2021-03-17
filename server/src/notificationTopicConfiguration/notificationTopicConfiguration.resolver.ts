import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NotificationTopicConfigurationResolverBase } from "./base/notificationTopicConfiguration.resolver.base";
import { NotificationTopicConfiguration } from "./base/NotificationTopicConfiguration";
import { NotificationTopicConfigurationService } from "./notificationTopicConfiguration.service";

@graphql.Resolver(() => NotificationTopicConfiguration)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class NotificationTopicConfigurationResolver extends NotificationTopicConfigurationResolverBase {
  constructor(
    protected readonly service: NotificationTopicConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
