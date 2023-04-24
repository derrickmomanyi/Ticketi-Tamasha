class CreateBoughtEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :bought_events do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
