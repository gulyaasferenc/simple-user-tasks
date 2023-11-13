export interface ParamsWithId {
  id: string
}

export interface BaseUser {
  firstName: string
  lastName: string
  username: string
}

export interface UserResponse extends BaseUser {
  creationDate: Date
  updatedon: Date
}
