class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
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
      t.timestamps
    end
  end
end
