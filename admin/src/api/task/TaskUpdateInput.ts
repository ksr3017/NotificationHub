import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
};
