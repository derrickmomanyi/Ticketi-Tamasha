class AddTicketTypesToBoughtEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :bought_events, :early_bird, :integer
    add_column :bought_events, :advance, :integer
    add_column :bought_events, :vip, :integer
  end
end
