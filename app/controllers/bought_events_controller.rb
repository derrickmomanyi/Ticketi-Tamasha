class BoughtEventsController < ApplicationController
    before_action :find_bought_event, only: [:show, :destroy]
    skip_before_action :authorized_user, :admin_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: BoughtEvent.all, status: :ok
    end

    def show
        bought_event = find_bought_event
        render json: bought_event
    end

    def create
        bought_event = BoughtEvent.create!(bought_event_params)
        render json: bought_event, status: :created
    end

    def destroy
        bought_event = find_bought_event
        bought_event.destroy
        head :no_content
    end
    
    private

    def bought_event_params
        params.permit(:customer_id, :event_id, :amount, :phone_number)
    end

    def find_bought_event
         BoughtEvent.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: "Bought Event not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
