class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :topic
      t.text :description

      t.timestamps
    end
  end
end
