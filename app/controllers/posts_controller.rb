class PostsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @post = Post.find(params[:user_id])

    render json: @post
  end

  # GET /posts/1
  def show
    render json: @post, include: [{comments: {include: :likes}}, :likes, :user]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post.blog, include: [{posts: {include: [:likes, :comments, :user]}}],
      status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit( :user_id, :content, :blog_id)
    end
end
