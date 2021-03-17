import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumNotificationTopicConfigurationEncryption } from "./EnumNotificationTopicConfigurationEncryption";
import { EnumNotificationTopicConfigurationTopicType } from "./EnumNotificationTopicConfigurationTopicType";
@InputType()
class NotificationTopicConfigurationWhereInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date;
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
  id?: string;
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
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date;
}
export { NotificationTopicConfigurationWhereInput };
