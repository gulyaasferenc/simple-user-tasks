export interface BaseTask {
  name: string
  description?: string
  status?: 'todo' | 'pending' | 'done'
  endDate?: Date
}

export interface TaskResponse extends BaseTask {
  creationDate: Date
  updatedon: Date
}

export interface ParamsWithId {
  id: string
}

export interface AssignBody {
  userId: string
}
