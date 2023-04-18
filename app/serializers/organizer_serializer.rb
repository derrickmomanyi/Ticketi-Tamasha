class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin
end
