class LikesController < ApplicationController
  before_action :authorize_request, only: [:toggle_post_like, :toggle_comment_like]

  def toggle_post_like
    @post = Post.find(params[:id])
    if @current_user.post_likes.include?(@post)
      @current_user.post_likes.delete(@post)
    else 
      @current_user.post_likes.push(@post)
    end
    render json: @post,  include: [{comments: {include: :likes}}, :likes]
  end

  def toggle_comment_like
    @comment = Comment.find(params[:id])
    if @current_user.comment_likes.include?(@comment)
      @current_user.pcomment_likes.delete(@comment)
    else 
      @current_user.comment_likes.push(@comment)
    end
    render json: @comment.post,  include: [{comments: {include: :likes}}, :likes]
  end

end
