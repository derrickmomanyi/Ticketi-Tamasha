
class Draft < ApplicationRecord
    validates :title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, :organizer_id, presence: true

    belongs_to :organizer
    has_one_attached :image

    def image_url
        Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
    end

end
