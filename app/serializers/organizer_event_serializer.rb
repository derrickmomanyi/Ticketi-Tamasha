class OrganizerEventSerializer < ActiveModel::Serializer
  attributes :id, :event

  has_one :event
  has_one :organizer  
end
