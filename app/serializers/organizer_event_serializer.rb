class OrganizerEventSerializer < ActiveModel::Serializer
  attributes :id, :event

  has_one :organizer
  has_one :event
end
