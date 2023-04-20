class Event < ApplicationRecord
    validates :title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, presence: true

    paginates_per 20
end
