class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :subject, :review, :rating, :user_id, :book_id, :username

  belongs_to :user
  belongs_to :book
end
