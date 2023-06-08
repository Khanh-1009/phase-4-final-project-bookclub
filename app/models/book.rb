class Book < ApplicationRecord
    CATEGORIES = ['Fiction', 'Non-Fiction', 'Romance', 'Historical Fiction', 'Science Fiction', 'Biography', 'Fantasy', 'Novel']

    validates :title, :year, :author, :description, :category, presence: true
    validates :description, length: { minimum: 50 }

    has_many :reviews
    has_many :users, through: :reviews
end
