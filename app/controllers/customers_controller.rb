class CustomersController < ApplicationController
    skip_before_action :authorized_user, :admin_user
    # wrap_parameters format: []


    def index
      customers = Customer.all
      render json: customers, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end


    def create
        if Organizer.where(email: params[:email]).exists?
          render json: { errors: "Email has already been taken" }, status: :unprocessable_entity
        else
          customer = Customer.create!(customer_params)
          session[:user_id] = customer.id
          session[:is_organizer] = 0
          if customer.save
            UserMailer.welcome_email(customer).deliver_now
          end
          render json: customer, status: :created
        end
    end

    def update
        customer = Customer.find(params[:id])
        customer.update!(customer_params)
        render json: customer, status: :ok
    end

    def customer_favourites
      customer = Customer.find(params[:id])
      render json: customer.customer_events
    end

    def bought_tickets
      customer = Customer.find(params[:id])
      render json: customer.bought_events
    end

    private

    def customer_params
        params.permit(:username, :email, :password, :password_confirmation)
      end

   
end
