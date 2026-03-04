export interface Task {
  id: number;
  user_id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type CreateTaskDTO = Omit<Task, "id">;
