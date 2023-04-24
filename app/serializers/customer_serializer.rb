class CustomerSerializer < ActiveModel::Serializer

  attributes :id, :username, :email, :admin
  has_many :customer_events
  has_many :bought_events  

end
