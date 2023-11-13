export interface BaseTask {
  name: string
  description?: string
  status?: 'todo' | 'pending' | 'done'
  endDate?: Date
}

export interface TaskResponse extends BaseTask {
  createdAt: Date
  updatedAt: Date
}

export interface ParamsWithId {
  id: string
}

export interface AssignBody {
  userId: string
}
