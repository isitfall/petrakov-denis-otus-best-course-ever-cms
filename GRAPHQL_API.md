# GraphQL API Documentation


## GraphQL Playground

`http://localhost:3000/graphql`

## Запросы (Queries)

### Users

#### Получить всех пользователей
```graphql
query {
  users {
    id
    username
    email
    role
    isActive
    createdAt
  }
}
```

#### Получить пользователя по ID
```graphql
query {
  user(id: "user-id-here") {
    id
    username
    email
    role
    isActive
    createdAt
  }
}
```

### Comments

#### Получить все комментарии
```graphql
query {
  comments {
    id
    text
    userId
    lessonId
    createdAt
  }
}
```

#### Получить комментарий по ID
```graphql
query {
  comment(id: "comment-id-here") {
    id
    text
    userId
    lessonId
    createdAt
  }
}
```

### Auth

#### Получить профиль пользователя
```graphql
query {
  profile
}
```

## Мутации (Mutations)

### Users

#### Создать пользователя
```graphql
mutation {
  createUser(createUserInput: {
    username: "john_doe"
    email: "john@example.com"
    password: "password123"
    role: "user"
    isActive: true
  }) {
    id
    username
    email
    role
    isActive
    createdAt
  }
}
```

#### Обновить пользователя
```graphql
mutation {
  updateUser(
    id: "user-id-here"
    updateUserInput: {
      username: "updated_username"
      role: "admin"
    }
  ) {
    id
    username
    email
    role
    isActive
    createdAt
  }
}
```

#### Удалить пользователя
```graphql
mutation {
  removeUser(id: "user-id-here")
}
```

### Comments

#### Создать комментарий
```graphql
mutation {
  createComment(createCommentInput: {
    text: "Отличный урок!"
    userId: "user-id-here"
    lessonId: "lesson-id-here"
  }) {
    id
    text
    userId
    lessonId
    createdAt
  }
}
```

#### Обновить комментарий
```graphql
mutation {
  updateComment(
    id: "comment-id-here"
    updateCommentInput: {
      text: "Обновленный комментарий"
    }
  ) {
    id
    text
    userId
    lessonId
    createdAt
  }
}
```

#### Удалить комментарий
```graphql
mutation {
  removeComment(id: "comment-id-here")
}
```

### Auth

#### Войти в систему
```graphql
mutation {
  login(loginInput: {
    email: "user@example.com"
    password: "password123"
  }) {
    access_token
    user
  }
}
```