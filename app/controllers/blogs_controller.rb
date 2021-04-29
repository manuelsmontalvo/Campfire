class BlogsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_blog, only: [:show, :update, :destroy]

  # GET /blogs
  def index
    @blogs = Blog.all

    render json: @blogs
  end

  # GET /blogs/1
  def show 
    render json: @blog , include: [{posts: {include: [:likes, :comments, :user]}}]
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: @blog, status: :created
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:topic, :description)
    end
end
