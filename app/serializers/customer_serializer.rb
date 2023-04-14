class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :customer_events
end
