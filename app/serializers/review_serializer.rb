class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :subject, :review, :rating, :user_id, :book_id
end
