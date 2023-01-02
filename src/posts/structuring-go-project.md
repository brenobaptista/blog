---
title: 'Structuring a Go Project'
description: 'Keep your Go projects easy to maintain.'
date: '2022-01-08'
---

There is no standard structure in Go. However, the community has come with a basic folder structure that most projects usually follow.

## Table of Contents

## Folder structure

### Commands (/cmd)

- Contains all the executable `main` packages.
- Each executable should have its own directory, like `/cmd/server/main.go`.
- It should contain only main execution code, with all logic being imported from `/internal` or `/pkg`.

### Internal (/internal)

- Contains packages that can only be imported by your project.
- It is a Go convention that doesn't allow the compiler to accidentally use its packages in an external project.

### Packages (/pkg)

- **Some developers don't recommend using this folder in your projects.**
- Contains packages that can be imported by your project and other projects.
- It is not a Go convention so the compiler doesn't do anything special.

### Project root (/)

- Contains all folders not related to Go, like documentation, migrations, other programming languages.
- Contains Docker files like `Dockerfile` and `docker-compose.yml`.
- **Alternatively, instead of using `/cmd` and `/internal` (and maybe `/pkg`) you can just put all packages on the project root.**

## Other conventions

### Don't use /src

- Your project should **not** have a /src folder, even though this is a convention in other languages.

### Package names

- Use singular nouns instead of plural, unless the singular noun causes a collision with existing primitive type names.
  - Use **controller** instead of **controllers**.
  - Use **errors** instead of **error**.

## Examples

- [https://github.com/brenobaptista/go-microservices-postgres](https://github.com/brenobaptista/go-microservices-postgres)
- [https://github.com/brenobaptista/go-todo-fiber](https://github.com/brenobaptista/go-todo-fiber)
