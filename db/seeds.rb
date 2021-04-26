# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Like.destroy_all
Comment.destroy_all
Post.destroy_all
Blog.destroy_all
User.destroy_all

@user = User.create!(username: 'Baby Yoda', email: 'babyyoda@gmail.com', password: '1234', avatar: 'https://media.wired.com/photos/5dd593a829b9c40008b179b3/191:100/w_2338,h_1224,c_limit/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg')
@blog = Blog.create!(topic: 'Frogs', description: 'Come together to discuss frogs and frog related things!')
@post = Post.create!(user_id: @user.id, blog_id: @blog.id, content: 'What frogs do yall like to eat')
@comment = Comment.create!(content: 'I love the blue ones myself', user_id: @user.id, post_id: @post.id)
@like = Like.create!(user_id: @user.id, comment_id: @comment.id)
@like = Like.create!(user_id: @user.id, post_id: @post.id)


puts "#{User.count} user created"
puts "#{Blog.count} blog created"
puts "#{Post.count} post created"
puts "#{Comment.count} comment created"
puts "#{Like.count} likes created"