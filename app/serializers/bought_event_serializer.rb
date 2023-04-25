class BoughtEventSerializer < ActiveModel::Serializer
  attributes :id, :amount, :early_bird, :advance, :vip, :phone_number, :event
  has_one :event
  has_one :customer
end
