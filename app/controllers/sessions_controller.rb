class SessionsController < ApplicationController
    skip_before_action :authorized_user, :admin_user

      # POST '/login'
        def create
            customer = Customer.find_by(email: params[:email])
            organizer = Organizer.find_by(email: params[:email])
           
        if customer&.authenticate(params[:password])
            session[:user_id] = customer.id
            session[:is_organizer] = 0
            render json: customer.as_json(except: [:password_digest]), status: :ok
        
        elsif organizer&.authenticate(params[:password])
        session[:user_id] = organizer.id
        session[:is_organizer] = 1
        render json: organizer.as_json(except: [:password_digest]), status: :ok  
           
            
        else
        render json: { errors: 'Invalid Password or Username'}, status: :unauthorized
        end
        
        end

         # DELETE '/logout'
        def delete
            session.delete :user_id
        end
end
