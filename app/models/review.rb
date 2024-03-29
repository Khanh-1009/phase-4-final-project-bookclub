class Review < ApplicationRecord
    validates :subject, :review, presence: true
    validates :review, length: { maximum: 500 }

    belongs_to :user 
    belongs_to :book 

    def username 
        user.username
    end

end
