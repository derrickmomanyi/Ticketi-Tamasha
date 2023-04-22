
class EventsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response   
    skip_before_action :authorized_user, :admin_user, only: [:index, :show, :create, :destroy] #allows non admins to access index and show

    wrap_parameters format: []

    def index
        render json: Event.page(params[:page]), status: :ok
    end

    def show
        event = find_event
        render json: event
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, :organizer_id)
    end

    def render_not_found_response
        render json: { errors: "Event not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end