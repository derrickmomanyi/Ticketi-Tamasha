class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin

  has_many :drafts
end
