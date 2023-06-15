# Phase-4 Final Project Ruby on Rails - The Book Lovers Club Website

## Learning Goals
* Understand and use Rails to generate a model, a controller, and a serializer.
* Create and map `create`, `index`, `show`, `update`, and `delete`  routes to a controller/action, and send JSON data as a response
* Use strong params to create a new resource.
* Generate an API that follows REST conventions
* Handle full CRUD with one model
* Check the validity of a model in a controller and render a response with the error messages
* Understand how to communicate between client and server using fetch, and how the server will process the request based on the URL, HTTP verb, and request body
* Debug common problems that occur as part of the request-response cycle
* Use `has_many`, `belongs_to` and `has_many :through` Active Record macros
* Use Active Model Serializer to render JSON for associations
* Use the session hash to log in a user and to authorize a user to perform actions
* Implement login and signup with a password and use `has_secure_password` to hash and salt passwords

## Introduction

The Back-End continues to be the most critical part in the phase-4 project, but it is much more complicated than the phase-3 project. I applied many-to-many relationship by creating `Books` and `Users` tables and `Reviews` as a join table. Rails is used in this project, which makes tasks of creating migrations, models, controllers, and serializers quicker and easier. There are three models: a book has many reviews and users through reviews, a users leave many reviews and read many books through reviews, and a review belongs to only one user and one book. The `reviews` table has two foreign keys: `book_id` and `user_id`. Several validations are added in the models, and I also add Active Model Serializers to render JSON data to the front-end.

For the user login, signup, and password protection, BCrypt is used to protected the users' passwords. I also use session hash to log users in and give them authorization to `read`, `post`, `edit`, and `delete` reviews on the website. 

## Conclusion

