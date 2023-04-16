class CustomerEventsController < ApplicationController
    #permissions here
    skip_before_action :authorized_user, :admin_user
    wrap_parameters format: []

    def show
        customer_event = find_customer_event
        render json: customer_event
    end

    def create 
        customer_event = CustomerEvent.create!(customer_event_params)
        render json: customer_event, status: :created
    end

    def update 
        customer_event = CustomerEvent.find(params[:id])
        customer_event.update!(customer_event_params)
        render json: customer_event, status: :ok
    end

    def destroy
        customer_event = find_customer_event
        customer_event.destroy
        head :no_content
    end

    private

    def customer_event_params
        params.permit(:event)
    end

    def find_customer_event
        CustomerEvent.find(params[:id])
    end
    
end
