class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin
end
