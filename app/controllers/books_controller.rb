class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        books = Book.all
        render json: books
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    private
    def book_params
        params.permit(:title, :year, :author, :description, :poster_url, :category)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
