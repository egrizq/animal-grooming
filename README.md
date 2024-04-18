# CRUD Grooming Animal

Management API based on Animal Grooming, implementing CRUD operations built with TypeScript, it ensures strong type safety and data validation using Zod. The project utilizing Express.js for Web Framework and Prisma ORM with MySQL for Database.

## Folder Structure

1. docs -> Documentation of endpoint for this project
2. prisma -> Contains starting point for database relation 
3. src -> Source code of this project

## Prerequisites

- Typescript
- Express.js
- MySQL & Prisma

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/egrizq/typescript.git
    ```

2. Install dependencies:

    ```bash
    npm install 
    ```

3. Configure the database:

    ```bash
    CREATE DATABASE animal;
    ```

    ```bash
    npx prisma migrate dev --name animal
    ```

4. Run the application:

    ```bash
    npm run build
    npm run start
    ```

5. Open your POSTMAN and use [http://localhost:8080](http://localhost:8080) to access the endpoint.

## Table Relation

``` Admin table ```

| Name | Type | Key |
|----------|----------|----------|
| username | varchar(100) | id |
| password | varchar(100) |  |
| email | varchar(100) |  |

``` User table ```

| Name | Type | Key |
|----------|----------|----------|
| user_id | int | id(autoincrement) |
| owner | varchar(100) | unique |
| phone | varchar(100) |  |
| address | varchar(100) |  |

``` Animal table ```

| Name | Type | Key |
|----------|----------|----------|
| animal_id | int | id(autoincrement) |
| name | varchar(100) | |
| age | varchar(10) |  |
| color | varchar(10) |  |
| kind | varchar(10) |  |
| user_id | Int | FK -> User |

``` Grooming table ```

| Name | Type | Key |
|----------|----------|----------|
| id | int | id(autoincrement) |
| owner | varchar(100) | unique |
| name | varchar(100) |  |
| groomingType | varchar(100) |  |
| date | varchar(100) |  |
| queue | int | |
| user_id | int | FK -> User |
