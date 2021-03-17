import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumNotificationTopicConfigurationEncryption } from "./EnumNotificationTopicConfigurationEncryption";
import { EnumNotificationTopicConfigurationTopicType } from "./EnumNotificationTopicConfigurationTopicType";
@InputType()
class NotificationTopicConfigurationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayNameForTopic?: string | null;
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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  topicName?: string;
  @ApiProperty({
    required: false,
    enum: EnumNotificationTopicConfigurationTopicType,
  })
  @IsEnum(EnumNotificationTopicConfigurationTopicType)
  @IsOptional()
  @Field(() => EnumNotificationTopicConfigurationTopicType, {
    nullable: true,
  })
  topicType?: "Fifo" | "Standard";
}
export { NotificationTopicConfigurationUpdateInput };
