class ChangeUserIdToNullToTrue < ActiveRecord::Migration[6.1]
  def change
    change_column :likes, :user_id, :bigint, null: false
  end
end
