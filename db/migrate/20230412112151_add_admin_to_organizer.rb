class AddAdminToOrganizer < ActiveRecord::Migration[7.0]
  def change
    add_column :organizers, :admin, :boolean, default: true
  end
end
