class DraftSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, :organizer_id

  has_one :organizer
end
