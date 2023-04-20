class Organizer < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    has_secure_password

    has_many :organizer_events
    has_many :drafts
end
