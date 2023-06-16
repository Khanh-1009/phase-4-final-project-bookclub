class BooksController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    def index
        books = Book.all
        render json: books
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def update
        book = Book.find_by(id: params[:id])
        if book
            book.update!(book_params)
            render json: book
        else
            render json: { errors: ["Book not found"] }, status: :not_found
        end
    end

    private
    def book_params
        params.permit(:title, :year, :author, :description, :poster_url, :category)
    end

    def authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id        
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
