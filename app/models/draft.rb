class Draft < ApplicationRecord
    validates :title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, :organizer_id, presence: true

    belongs_to :organizer
end
