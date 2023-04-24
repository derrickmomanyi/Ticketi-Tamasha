class PurchasedEvent < ApplicationRecord
    validates :event, uniqueness: { scope: :customer }

    belongs_to :event
    belongs_to :customer
end
