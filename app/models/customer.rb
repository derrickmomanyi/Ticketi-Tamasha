class Customer < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    has_secure_password

    has_many :customer_events
end
