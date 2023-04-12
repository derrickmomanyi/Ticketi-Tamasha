class Customer < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    has_secure_password
end
