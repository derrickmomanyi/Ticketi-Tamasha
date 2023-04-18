class CreateDrafts < ActiveRecord::Migration[7.0]
  def change
    create_table :drafts do |t|
      t.string :title
      t.string :image
      t.string :category
      t.string :description
      t.string :hosted_by
      t.string :featuring
      t.string :dress_code
      t.string :location
      t.date :date
      t.time :time 
      t.integer :tickets
      t.integer :price
      t.belongs_to :organizer, null: false, foreign_key: true
      t.timestamps
    end
  end
end
