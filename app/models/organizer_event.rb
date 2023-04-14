class OrganizerEvent < ApplicationRecord
    validates :event, uniqueness: { scope: :organizer }

    belongs_to :event
    belongs_to :organizer
end
