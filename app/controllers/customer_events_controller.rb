
class CustomerEventsController < ApplicationController    
        before_action :find_customer_event, only: [:show, :destroy]
        skip_before_action :authorized_user, :admin_user
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
        def index
            render json: CustomerEvent.all, status: :ok
        end
    
        def show
            customer_event = find_customer_event
            render json: customer_event
        end
    
        def create
            customer_event = CustomerEvent.create!(customer_event_params)
            render json: customer_event, status: :created
        end
    
        def destroy
            customer_event = find_customer_event
            customer_event.destroy
            head :no_content
        end
        
        private
    
        def customer_event_params
            params.permit(:customer_id, :event_id)
        end
    
        def find_customer_event
             CustomerEvent.find(params[:id])
        end
    
        def render_not_found_response
            render json: { errors: "Events for customer not found"}, status: :not_found
        end
        
    
        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    

end
