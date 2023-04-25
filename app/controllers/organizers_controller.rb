class OrganizersController < ApplicationController
    skip_before_action :authorized_user, :admin_user
    

    def index
      render json: Organizer.all, status: :ok
    end


    def show
        render json: current_user, status: :ok
    end

      
    def create
        if Customer.where(email: params[:email]).exists?
          render json: { errors: "Email has already been taken" }, status: :unprocessable_entity
        else
          organizer = Organizer.create!(organizer_params)
          session[:user_id] = organizer.id
          session[:is_organizer] = 1
          if organizer.save
            UserMailer.welcome_email(organizer).deliver_now
          end
          render json: organizer, status: :created
        end
    end

    #if organizer wants to change username or password
    def update
        organizer = find_organizer
        organizer.update!(organizer_params)
        render json: organizer, status: :ok
    end


    def destroy
        organizer = find_organizer
        organizer.destroy
        head :no_content
    end

    def organizer_drafts
      organizer = Organizer.find(params[:id])
      render json: organizer.drafts
    end

    def my_events
      organizer = Organizer.find(params[:id])
      render json: organizer.events
    end

    private

    def find_organizer
      Organizer.find(params[:id])
     end
  
    def organizer_params
      params.permit(:username, :email, :password, :password_confirmation)
    end
end
