class BooksController < ApplicationController
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

end
