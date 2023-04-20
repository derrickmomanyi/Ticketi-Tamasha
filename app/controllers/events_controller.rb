
class EventsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response   
    skip_before_action :authorized_user, :admin_user, only: [:index, :show] #allows non admins to access index and show

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

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price)
    end

    def render_not_found_response
        render json: { errors: "Event not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

class EventsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response   
    skip_before_action :authorized_user, :admin_user, only: [:index, :show] #allows non admins to access index and show

    wrap_parameters format: []

    def index
        render json: Event.all, status: :ok
    end

    def show
        event = find_event
        render json: event
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price)
    end

    def render_not_found_response
        render json: { errors: "Event not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end