class CustomerEventSerializer < ActiveModel::Serializer
  attributes :id, :event

  has_one :customer
  has_one :event
end
