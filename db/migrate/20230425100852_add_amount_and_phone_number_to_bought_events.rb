class AddAmountAndPhoneNumberToBoughtEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :bought_events, :amount, :integer
    add_column :bought_events, :phone_number, :string
  end
end
