class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  
  has_and_belongs_to_many :likes,
      class_name: "User",
      foreign_key: "comment_id",
      association_foreign_key: "user_id",
      join_table: 'likes'

end
