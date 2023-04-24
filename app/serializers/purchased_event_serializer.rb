class PurchasedEventSerializer < ActiveModel::Serializer
  attributes :id, :event
  has_one :event
  has_one :customer 
end
