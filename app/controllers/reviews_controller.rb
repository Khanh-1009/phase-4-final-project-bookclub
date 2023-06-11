class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize

    def index
        reviews = Review.all 
        render json: reviews
    end

    def create
        review = current_book.reviews.create!(review_params)
        render json: review, status: :created
        # if review.valid?
        #     render json: review
        # else
        #     render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    def update
        review = current_book.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def current_book
        Book.find(params[:book_id])
    end

    def review_params
        params.permit(:subject, :rating, :review, :book_id, :user_id)
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize 
        render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
