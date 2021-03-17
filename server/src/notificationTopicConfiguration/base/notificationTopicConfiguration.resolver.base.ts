import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { CreateNotificationTopicConfigurationArgs } from "./CreateNotificationTopicConfigurationArgs";
import { UpdateNotificationTopicConfigurationArgs } from "./UpdateNotificationTopicConfigurationArgs";
import { DeleteNotificationTopicConfigurationArgs } from "./DeleteNotificationTopicConfigurationArgs";
import { FindManyNotificationTopicConfigurationArgs } from "./FindManyNotificationTopicConfigurationArgs";
import { FindOneNotificationTopicConfigurationArgs } from "./FindOneNotificationTopicConfigurationArgs";
import { NotificationTopicConfiguration } from "./NotificationTopicConfiguration";
import { NotificationTopicConfigurationService } from "../notificationTopicConfiguration.service";

@graphql.Resolver(() => NotificationTopicConfiguration)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class NotificationTopicConfigurationResolverBase {
  constructor(
    protected readonly service: NotificationTopicConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => [NotificationTopicConfiguration])
  @nestAccessControl.UseRoles({
    resource: "NotificationTopicConfiguration",
    action: "read",
    possession: "any",
  })
  async notificationTopicConfigurations(
    @graphql.Args() args: FindManyNotificationTopicConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NotificationTopicConfiguration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "NotificationTopicConfiguration",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => NotificationTopicConfiguration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NotificationTopicConfiguration",
    action: "read",
    possession: "own",
  })
  async notificationTopicConfiguration(
    @graphql.Args() args: FindOneNotificationTopicConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NotificationTopicConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "NotificationTopicConfiguration",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => NotificationTopicConfiguration)
  @nestAccessControl.UseRoles({
    resource: "NotificationTopicConfiguration",
    action: "create",
    possession: "any",
  })
  async createNotificationTopicConfiguration(
    @graphql.Args() args: CreateNotificationTopicConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NotificationTopicConfiguration> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "NotificationTopicConfiguration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"NotificationTopicConfiguration"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => NotificationTopicConfiguration)
  @nestAccessControl.UseRoles({
    resource: "NotificationTopicConfiguration",
    action: "update",
    possession: "any",
  })
  async updateNotificationTopicConfiguration(
    @graphql.Args() args: UpdateNotificationTopicConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NotificationTopicConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "NotificationTopicConfiguration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"NotificationTopicConfiguration"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NotificationTopicConfiguration)
  @nestAccessControl.UseRoles({
    resource: "NotificationTopicConfiguration",
    action: "delete",
    possession: "any",
  })
  async deleteNotificationTopicConfiguration(
    @graphql.Args() args: DeleteNotificationTopicConfigurationArgs
  ): Promise<NotificationTopicConfiguration | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
