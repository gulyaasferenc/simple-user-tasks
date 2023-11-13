## Simple user-tasks

> - Basic mvc project with CRUDL Rest Api
> - A cron job is started with the service that check enDate property of the pending tasks and set done status if that time is already passed.

### How to start

- Start the db: `cd docker && docker-compose up -d && cd ..`
- Install 3rd parties: `yarn`
- Run migration: `yarn migrate:up`
- Compile ts: `yarn tsc`
- Start the service: `yarn start:dev`

### How to test

#### Create user

```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"jsmith","firstName" : "John", "lastName" : "Smith"}' http://localhost:3000/api/users
```

#### Update user

```sh
curl -i -H "Content-Type: application/json" -X PUT -d '{"firstName" : "John", "lastName" : "Doe", "username": "jdoe"}' http://localhost:3000/api/users/{id}
```

#### List all users

```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users
```

#### Get User info

```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users/{id}
```

#### Create Task

```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"name":"My task","description" : "Description of task", "endDate" : "2016-05-25 14:25:00"}' http://localhost:3000/api/tasks
```

#### Assign Task

```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"userId": {user_id}}' http://localhost:3000/api/tasks/{task_id}/assign-user
```

#### Unassign Task

```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"userId": {user_id}}' http://localhost:3000/api/tasks/{task_id}/unassign
```

#### Update Task

```sh
curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My updated task"}' http://localhost:3000/api/tasks/{task_id}
```

#### Delete Task

```sh
curl -i -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/tasks/{task_id}
```

#### Get Task Info

```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/tasks/{task_id}
```

#### List all tasks for a user

```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users/{user_id}/tasks
```
