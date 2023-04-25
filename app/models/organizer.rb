class Organizer < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    has_secure_password

    has_many :organizer_events, dependent: :destroy
    has_many :drafts, dependent: :destroy
    has_many :events
end
