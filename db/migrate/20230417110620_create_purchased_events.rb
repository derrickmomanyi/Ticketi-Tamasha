class CreatePurchasedEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :purchased_events do |t|

      t.timestamps
    end
  end
end
