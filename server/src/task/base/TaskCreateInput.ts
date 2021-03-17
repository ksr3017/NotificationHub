import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsInt,
  ValidateNested,
  IsDate,
  IsEnum,
} from "class-validator";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTaskStatus } from "./EnumTaskStatus";
@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assignedTo?: string | null;
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimationDays?: number | null;
  @ApiProperty({
    required: false,
    type: ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
  @ApiProperty({
    required: false,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @IsOptional()
  @Field(() => EnumTaskStatus, {
    nullable: true,
  })
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { TaskCreateInput };
