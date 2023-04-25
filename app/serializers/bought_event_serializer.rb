class BoughtEventSerializer < ActiveModel::Serializer
  attributes :id, :amount, :phone_number, :event
  has_one :event
  has_one :customer
end
