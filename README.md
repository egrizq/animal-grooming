# CRUD Grooming Animal

CRUD application implemented in Typescript, utilizing express.js framework for routing and Prisma ORM for database operations. 

The project required admin to handle all the services, so you must create an account first, after creating the account you can access all the service/api endpoint.

To handle user who want to grooming his animal, you must create an account for him and the animal from owner name, phone, address, name of the animal, age, color, kind (read: cat or dog).

After registering the user account as an admin, you must register the user for grooming queue, and request for grooming type  like 'kutu' or 'kombinasi', and giving him a queue who will show after you register him.

If the grooming is done then you can delete the data from grooming table, then you can proceed to the next user animal.

If you logout, you cannot access all the services.

## Folder Structure

1. docs -> Documentation of endpoint for this project
2. prisma -> Contains starting point for database relation 
3. src -> Source code of this project

## Prerequisites

- Typescript
- Express.js
- MySQL & Prisma

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

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/egrizq/typescript.git
    ```

2. Install dependencies:

    ```bash
    npm install // to install all the dependecies
    ```

3. Configure the database:

    ```bash
    // open sql and create new database
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