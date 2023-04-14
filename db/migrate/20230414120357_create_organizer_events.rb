class CreateOrganizerEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :organizer_events do |t|

      t.timestamps
    end
  end
end
