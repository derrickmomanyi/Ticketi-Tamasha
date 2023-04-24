class PurchasedEventsController < ApplicationController

    before_action :find_purchased_event, only: [:show, :destroy]
    skip_before_action :authorized_user, :admin_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: PurchasedEvent.all, status: :ok
    end

    def show
        purchased_event = find_purchased_event
        render json: purchased_event
    end

    def create
        purchased_event = PurchasedEvent.create!(purchased_event_params)
        render json: purchased_event, status: :created
    end

    def destroy
        purchased_event = find_purchased_event
        purchased_event.destroy
        head :no_content
    end
    
    private

    def purchased_event_params
        params.permit(:customer_id, :event_id)
    end

    def find_purchased_event
         PurchasedEvent.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: "Purchased Event not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
