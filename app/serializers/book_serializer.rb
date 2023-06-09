class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :author, :description, :poster_url, :category

  has_many :reviews
  has_many :users
end
