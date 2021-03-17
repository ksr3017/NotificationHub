import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumNotificationTopicConfigurationEncryption } from "./EnumNotificationTopicConfigurationEncryption";
import { EnumNotificationTopicConfigurationTopicType } from "./EnumNotificationTopicConfigurationTopicType";
@ObjectType()
class NotificationTopicConfiguration {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayNameForTopic!: string | null;
  @ApiProperty({
    required: false,
    enum: EnumNotificationTopicConfigurationEncryption,
  })
  @IsEnum(EnumNotificationTopicConfigurationEncryption)
  @IsOptional()
  @Field(() => EnumNotificationTopicConfigurationEncryption, {
    nullable: true,
  })
  encryption?: "EnableEncryption" | "DisableEncryption" | null;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  topicName!: string;
  @ApiProperty({
    required: true,
    enum: EnumNotificationTopicConfigurationTopicType,
  })
  @IsEnum(EnumNotificationTopicConfigurationTopicType)
  @Field(() => EnumNotificationTopicConfigurationTopicType)
  topicType!: "Fifo" | "Standard";
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { NotificationTopicConfiguration };
