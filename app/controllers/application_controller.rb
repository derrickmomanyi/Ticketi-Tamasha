class ApplicationController < ActionController::Base
    before_action :authorized_user, :admin_user
    include ActionController::Cookies
    skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def current_user
        if (session[:is_organizer] === 1)
          @current_user ||= Organizer.find_by(id: session[:user_id])
          # byebug
        else
          @current_user ||= Customer.find_by(id: session[:user_id])
          # byebug
        end
      end 

    # make authorized current user action
    def authorized_user
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user
      end
  
      def admin_user
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user.admin
      end

    private 

    def render_not_found(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
      end
    
      def render_invalid(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
      end
end