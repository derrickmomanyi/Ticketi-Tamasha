class AddOrganizerToEvents < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :organizer, null: true, foreign_key: true
  end
end
