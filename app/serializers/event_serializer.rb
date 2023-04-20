class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price
end
