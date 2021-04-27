class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments

  has_and_belongs_to_many :post_likes,
      class_name: "Post",
      foreign_key: "user_id",
      association_foreign_key: "post_id",
      join_table: 'likes'
  
  has_and_belongs_to_many :comment_likes,
      class_name: "Comment",
      foreign_key: "user_id",
      association_foreign_key: "comment_id",
      join_table: 'likes'
  

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
