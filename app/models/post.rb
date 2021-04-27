class Post < ApplicationRecord
  belongs_to :user
  belongs_to :blog
  has_many :comments
  
  has_and_belongs_to_many :likes,
      class_name: "User",
      foreign_key: "post_id",
      association_foreign_key: "user_id",
      join_table: 'likes'

end
