class CreateOrganizerEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :organizer_events do |t|
      t.belongs_to :organizer, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true


      t.timestamps
    end
  end
end
