
class Event < ApplicationRecord
    validates :title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, presence: true

    paginates_per 60
    has_one_attached :image

    def image_url
        Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
    end
end
