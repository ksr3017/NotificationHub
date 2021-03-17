import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumNotificationTopicConfigurationEncryption } from "./EnumNotificationTopicConfigurationEncryption";
import { EnumNotificationTopicConfigurationTopicType } from "./EnumNotificationTopicConfigurationTopicType";
@InputType()
class NotificationTopicConfigurationCreateInput {
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
}
export { NotificationTopicConfigurationCreateInput };
